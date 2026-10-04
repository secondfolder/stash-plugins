#!/bin/bash
set -e

# Prints the number of downloads of each version of each externally hosted plugin, using the download counts GitHub
# keeps for release assets. The GitHub repos are taken from the path URLs in the plugins/<plugin_id>.yml manifests.
# Requires the gh CLI to be installed and authenticated.

cd "$(dirname "$0")/.."

repos=$(grep -h '^path:' plugins/*.yml | sed -n 's|.*github\.com/\([^/]*/[^/]*\)/releases/.*|\1|p' | sort -u)

if [ -z "$repos" ]; then
    echo "No plugins hosted as GitHub release assets found" >&2
    exit 1
fi

for repo in $repos; do
    echo "## $repo"
    gh api --paginate "repos/$repo/releases" \
        --jq '.[] | .assets[] | select(.name | endswith(".zip")) | [.name, .download_count] | @tsv' \
        | awk -F '\t' '{ printf "%-40s %8d\n", $1, $2; total += $2 } END { printf "%-40s %8d\n", "Total", total }'
    echo ""
done
