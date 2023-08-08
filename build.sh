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
./update-deployment.sh
kubectl apply -f Kubernetes/service.yaml
kubectl apply -f Kubernetes/workload.yaml

# Run the new container
docker run -d -p 4000:3000 --name cheatsheet bloodysoon/cheatsheet:$NEW_VERSION
