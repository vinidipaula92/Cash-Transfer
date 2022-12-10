#!/bin/bash

npm init -y

if [ $? != 0 ]; then
  echo "JavaScript compilation failed"
  exit 1
fi