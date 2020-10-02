#!/bin/bash
## A set of commands for deployment
git pull
yarn
yarn build
pm2 reload ecosystem.config.js
#EOF
