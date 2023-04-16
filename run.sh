#!/bin/bash
docker build ./server -t feynubrick/node-test-app
docker run -p 3001:3000 -d feynubrick/node-test-app
docker run -p 3002:3000 -d feynubrick/node-test-app
docker run -p 3003:3000 -d feynubrick/node-test-app
