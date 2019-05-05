var path = require("path");
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var cssExtract = new ExtractTextPlugin('[name].css');
var commonLoaders = [
    { test: /(\.jsx|\.js)$/, loader: "babel-loader" },
    { test: /\.png$/, loader: "url-loader" },
    { test: /\.jpg$/, loader: "file-loader" },
    { test: /\.css$/,  loader: "css-loader" },
    {test: /\.scss$/,loader: cssExtract.extract({ fallback: 'style-loader', use: 'css-loader!sass-loader' })}
];

module.exports = [
    {
    entry: "./Components/app.js",
    output: {
      path: __dirname+"/public",
      filename: "index.js",
    },
    resolve:{
        extensions:['.js','.scss']
    },
    plugins: [cssExtract],
    module: {
      loaders: commonLoaders
    }
  },
  {name: "server-side",
    entry: "./server/index.js",
    target: "node",
    output: {
      path: __dirname,
      filename: "index.js",
      libraryTarget: "commonjs2"
    },
    plugins: [cssExtract],
    resolve:{
        extensions:['.js']
    },
    externals: /^[a-z\-0-9]+$/,
    module: {
      loaders: commonLoaders
    }
  }
];