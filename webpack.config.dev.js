var path = require('path');

module.exports =  {
  devtool: 'inline-source-map',
  entry: [path.resolve(__dirname, 'src/index.js')],
  target: 'web',
  output: {
    path: path.resolve(__dirname, 'src'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  mode: 'development',
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loaders: ['babel-loader'] },
      { test: /\.css$/, loaders: ['style-loader', 'css-loader'] }
    ]
  }
};


/* Html, CSS and vue loaders and plugins can be configured based on need. For now I will setup 

webpack-dev-server which helps in hot reloading and shit*/