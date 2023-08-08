#!/bin/bash

# Get the version from package.json
# install brew install jq
IMAGE_VERSION=$(jq -r '.version' package.json)


python3 - <<EOF
import re

new_version = "$IMAGE_VERSION"

with open("kubernetes/workload.yml", "r") as f:
    content = f.read()

pattern = r'(bloodysoon/cheatsheet:v)[0-9.]+'
replacement = f'\\g<1>{new_version}'

updated_content = re.sub(pattern, replacement, content)

with open("kubernetes/workload.yml", "w") as f:
    f.write(updated_content)
EOF
