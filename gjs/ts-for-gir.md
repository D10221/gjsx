# Generate 
 cd ts-for-gjs/
 git submodule update --init
 npm install
 npm run build
 npm link
 cd ../gjs 
 set package.json type to module
 ts-for-gir generate Gtk-3.0 -e gjs -o ./
 remove type module from package.json
 cd ../
 yarn build