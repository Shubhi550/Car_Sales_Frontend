## Install node js 

## Install node react-scripts
npm install react-scripts --save

## Install node-modules
npm install

npm install http-server -g

## To view the UI
npm start

## When running the UI in ec2, to view in your local browser
HOST="0.0.0.0" npm start

----->> open your browser and enter :
ec2_ip:3000

# Error Handling

## Install node react-scripts
### If running node js throws react-scripts error use the below command to install it
npm install react-scripts --save

## For babel-jest error use
npm i -E react-scripts@3.4.0

npm audit fix --force

## For webpack-dev-server error use
Add the following line in the environment file or create .env file inside react app and add

SKIP_PREFLIGHT_CHECK=true

### Below link has more solutions for webpack-dev-server error if the above one fails
https://stackoverflow.com/questions/52606707/cannot-uninstall-webpack-from-react-script


