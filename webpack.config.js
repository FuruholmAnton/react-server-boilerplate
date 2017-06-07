"use strict";
require('babel-polyfill');
var webpack = require('webpack');
var path = require('path');
var loaders = require('./webpack.loaders');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var DashboardPlugin = require('webpack-dashboard/plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

const HOST = process.env.HOST || "127.0.0.1";
const PORT = process.env.PORT || "8888";

loaders.push({
  test: /\.scss$/,
  loaders: [
		'style-loader',
		{
			loader: 'css-loader',
			options: {
				importLoaders: 1,
				modules: true,
				localIdentName: '[name]__[local]___[hash:base64:5]',
			}
		},
		'postcss-loader',
		'sass-loader'
	],
  exclude: ['node_modules']
});

loaders.push({
  test: /\.sass$/,
  loaders: ['style-loader', 'css-loader?importLoaders=1', 'postcss-loader', 'sass-loader'],
  exclude: ['node_modules']
});

// module.exports = {
  // entry: [
	// 	'babel-polyfill',
  //   'react-hot-loader/patch',
  //   './src/index.jsx', // your app's entry point
  // ],
//   devtool: process.env.WEBPACK_DEVTOOL || 'eval-source-map',
//   output: {
//     publicPath: '/',
//     path: path.join(__dirname, 'public'),
//     filename: 'bundle.js'
//   },
  // resolve: {
  //   extensions: ['.js', '.jsx']
  // },
//   module: {
//     loaders
//   },
//   plugins: [
// 		new webpack.NamedModulesPlugin(),
//     new webpack.NoEmitOnErrorsPlugin(),
//     new webpack.HotModuleReplacementPlugin(),
//     new ExtractTextPlugin({
//       filename: 'style.css',
//       allChunks: true
//     }),
//     new DashboardPlugin(),
//     new HtmlWebpackPlugin({
//       template: './src/template.html',
//       files: {
//         css: ['style.css'],
//         js: [ "bundle.js"],
//       }
//     }),
//   ]
// };

const clientConfig = {
 	entry: [
		'babel-polyfill',
    'react-hot-loader/patch',
    './src/index.jsx', // your app's entry point
  ],
  output: {
    path: `${__dirname}/build`,
    filename: 'client.js',
    publicPath: '/',
  },
	resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: loaders,
  },
  plugins: [
    // ...
    new webpack.NormalModuleReplacementPlugin(
      /^\.\/src\/routes\/Routes$/,
      './src/routes/RoutesAsync'
    ),
  ]
};

const serverConfig = {
  entry: './server/server.js',
  output: {
    path: `${__dirname}/build`,
    filename: 'server.js',
    libraryTarget: 'commonjs2',
  },
  target: 'node',
	resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: loaders,
  },
  externals: [nodeExternals()],
  // Server build configuration
};

module.exports = [
  clientConfig,
  serverConfig
];
