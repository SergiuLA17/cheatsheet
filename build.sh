#!/bin/bash
npm run minor

docker build -t cheatsheet .
docker tag cheatsheet cheatsheet:$NEW_VERSION
docker push bloodysoon/cheatsheet:$NEW_VERSION

docker stop cheatsheet
docker rm cheatsheet

docker 

docker run -d -p4000:3000 --name cheatsheet cheatsheet