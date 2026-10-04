#!/bin/bash
set -e

# Prints the number of downloads of each version of each plugin listed in plugins.txt, using the download counts GitHub
# keeps for release assets. Requires the gh CLI to be installed and authenticated.

cd "$(dirname "$0")/.."

for repo in $(grep -v -e '^[[:space:]]*#' plugins.txt); do
    echo "## $repo"
    gh api --paginate "repos/$repo/releases" \
        --jq '.[] | .assets[] | select(.name | endswith(".zip")) | [.name, .download_count] | @tsv' \
        | awk -F '\t' '{ printf "%-40s %8d\n", $1, $2; total += $2 } END { printf "%-40s %8d\n", "Total", total }'
    echo ""
done
