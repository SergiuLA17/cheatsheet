#!/bin/bash

# Bump the version using npm
NEW_VERSION=$(npm version minor)

# Build Docker image and tag with the new version
docker build -t cheatsheet .
docker tag cheatsheet bloodysoon/cheatsheet:$NEW_VERSION
docker push bloodysoon/cheatsheet:$NEW_VERSION

# Stop and remove previous container
docker stop cheatsheet
docker rm cheatsheet
././scripts/update-workload.sh
kubectl apply -f kubernetes/service.yaml
kubectl apply -f kubernetes/workload.yml

# Run the new container
docker run -d -p 4000:3000 --name cheatsheet bloodysoon/cheatsheet:$NEW_VERSION
