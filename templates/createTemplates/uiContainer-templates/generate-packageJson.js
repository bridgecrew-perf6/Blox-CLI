/* eslint-disable */

const generateUiContainerPackageJson = (name) => `
{
    "name": "${name}",
    "version": "0.0.1",
    "description": "",
    "main": "index.js",
    "devDependencies": {
      "@babel/core": "7.15.0",
      "@babel/preset-react": "7.14.5",
      "babel-loader": "8.2.2",
      "dotenv": "^16.0.0",
      "html-webpack-plugin": "5.3.2",
      "serve": "12.0.0",
      "webpack": "5.51.2",
      "webpack-cli": "4.8.0",
      "webpack-dev-server": "4.1.0",
      "node-blox-sdk": "^0.0.1"
    },
    "scripts": {
      "start": "webpack-dev-server",
      "build": "webpack --mode production",
      "serve": "webpack-cli serve",
      "clean": "rm -rf dist"
    },
    "dependencies": {
      "react": "^17.0.2",
      "react-dom": "^17.0.2",
      "react-redux": "^7.2.5",
      "blox-js-sdk": "^0.0.4"
    },
    "keywords": [],
    "author": "",
    "license": "ISC",
    "type": "module"
  }
  `

module.exports = { generateUiContainerPackageJson }
