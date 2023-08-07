#!/bin/bash


docker build -t cheatsheet .


docker stop cheatsheet
docker rm cheatsheet

docker 

docker run -d -p4000:3000 --name cheatsheet cheatsheet