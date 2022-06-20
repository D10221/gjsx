# Generate 
 cd ts-for-gjs/
 git submodule update --init
 npm install
 npm run build
 npm link
 cd ../gjs 
 set package.json type to module
 ts-for-gir generate
 rm types -rf
 mv @types types
 mv types/Gjs types/gjs
 rm types/node-gtk -rf
 remove type module from package.json
 cd ../
 
 yarn build