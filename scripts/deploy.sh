#!/usr/bin/env sh
set -eu
npm install --no-audit --no-fund
npm run build
npm test
sudo systemctl stop cleanital-website
sudo rsync -a --delete dist/ /opt/cleanital-website/dist/
sudo rsync -a server/ /opt/cleanital-website/server/
sudo systemctl start cleanital-website
curl --fail --silent --show-error http://127.0.0.1:4321/ >/dev/null
printf '%s\n' 'Deployment smoke test passed.'
