# 
from root package ../
git submodule update --init
cd ts-for-git
git submodule update --init
npm install
npm run build
npm link
apt install gnome-devel libgtk2.0-dev
cd ../gjs
ts-for-gir generate # generates to Gjs, note diff casing