# !/usr/bin/bash

# -e: stop script if an error occurs
# -x: log commands
set -e -x

rm -rf public
yarn build
aws s3 sync public s3://kanaabe.com --acl public-read --delete
