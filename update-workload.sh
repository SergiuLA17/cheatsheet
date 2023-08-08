#!/bin/bash

# Get the version from package.json
IMAGE_VERSION=$(jq -r '.version' package.json)

# Update the deployment.yaml with the new version
sed -i "s|bloodysoon/cheatsheet:v[0-9.]\+|bloodysoon/cheatsheet:v$IMAGE_VERSION|" deployment.yaml
