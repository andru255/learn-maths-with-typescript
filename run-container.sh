#!/bin/sh

docker run --rm -e DEV_UID=$(id -u) -e DEV_GID=$(id -g) -v $(pwd)/config:/usr/local/share/config -v $(pwd)/tasks/:/usr/local/share/tasks -v $(pwd)/src:/usr/local/share/input -v $(pwd)/public:/usr/local/share/output andru255/microtask-typescript gulp
