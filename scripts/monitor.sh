#!/bin/bash

if ! curl -s http://localhost:5000 > /dev/null; then
  echo "Backend DOWN at $(date)" >> /var/log/devops-alert.log
fi
