#!/bin/bash
set -e

# Builds the plugin repository's index.yml, which is what Stash reads to list the available plugins.
#
# The plugins are listed in plugins.txt as the GitHub repos they're released from. Each plugin's entry is generated from
# a release of its repo, which must have a single zip asset containing the plugin's files with its <plugin_id>.yml at
# the root. Stash downloads the zip straight from the release, so GitHub tracks how many times each version is
# downloaded.
#
# Requires the gh CLI to be installed and authenticated.
#
# Arguments:
#   $1 - The directory to output to (default: _site)
#   $2 - The channel to build: "stable" uses each repo's latest release, "develop" uses each repo's newest release
#        including pre-releases (default: stable)

outdir="${1:-_site}"
channel="${2:-stable}"

rm -rf "$outdir"
mkdir -p "$outdir"
outdir=$(cd "$outdir" && pwd)
touch "$outdir"/index.yml

cd "$(dirname "$0")"

tmpdir=$(mktemp -d)
trap 'rm -rf "$tmpdir"' EXIT

addPlugin()
{
    repo=$1

    case "$channel" in
        stable) release=$(gh api "repos/$repo/releases/latest") ;;
        develop) release=$(gh api "repos/$repo/releases" --jq '[.[] | select(.draft | not)][0]') ;;
        *) echo "Error: unknown channel $channel" >&2; exit 1 ;;
    esac

    tag=$(echo "$release" | jq -r '.tag_name // empty')
    if [ -z "$tag" ]; then
        echo "Error: no $channel release found for $repo" >&2
        exit 1
    fi

    asset=$(echo "$release" | jq -r '.assets[] | select(.name | endswith(".zip")) | .name')
    if [ "$(echo "$asset" | grep -c .)" != "1" ]; then
        echo "Error: expected exactly one zip asset in $repo $tag but found: ${asset:-none}" >&2
        exit 1
    fi
    url=$(echo "$release" | jq -r --arg name "$asset" '.assets[] | select(.name == $name) | .browser_download_url')

    echo "Adding $repo $tag"

    rm -rf "$tmpdir"/*
    gh release download "$tag" --repo "$repo" --pattern "$asset" --dir "$tmpdir"
    zipfile="$tmpdir/$asset"

    # the plugin's id is the name of its yml file
    yml=$(unzip -Z1 "$zipfile" | grep -E '^[^/]+\.yml$' || true)
    if [ "$(echo "$yml" | grep -c .)" != "1" ]; then
        echo "Error: expected exactly one yml file at the root of $repo's $asset but found: ${yml:-none}" >&2
        exit 1
    fi
    plugin_id=$(basename "$yml" .yml)
    unzip -p "$zipfile" "$yml" > "$tmpdir/plugin.yml"

    name=$(getField name)
    description=$(getField description)
    version=$(getField version | sed -e 's/^"\(.*\)"$/\1/')
    version=${version:-${tag#v}}
    dep=$(grep "^# requires:" "$tmpdir/plugin.yml" | cut -c 12- | sed -e 's/\r//' || true)
    date=$(echo "$release" | jq -r '.published_at // .created_at' | sed -e 's/T/ /' -e 's/Z$//')
    sha256=$(sha256sum "$zipfile" | cut -d' ' -f1)

    echo "- id: $plugin_id
  name: $name
  metadata:
    description: $description
  version: $version
  date: $date
  path: $url
  sha256: $sha256" >> "$outdir"/index.yml

    # handle dependencies
    if [ -n "$dep" ]; then
        echo "  requires:" >> "$outdir"/index.yml
        for d in ${dep//,/ }; do
            echo "    - $d" >> "$outdir"/index.yml
        done
    fi

    echo "" >> "$outdir"/index.yml
}

# Get the value of a top level field from the plugin's yml file
getField()
{
    grep "^$1:" "$tmpdir/plugin.yml" | head -n 1 | cut -d' ' -f2- | sed -e 's/\r//'
}

for repo in $(grep -v -e '^[[:space:]]*#' plugins.txt); do
    addPlugin "$repo"
done
