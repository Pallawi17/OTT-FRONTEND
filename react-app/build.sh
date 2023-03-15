#!/bin/bash

## __author__='Pallawi'
### ----------------------------
## build, cleanup

function __build_cleanup__(){
 rm -rf dist
}


function __build_app__(){
  echo "building our application"

__build_cleanup__
  npm run build
}

__build_app__