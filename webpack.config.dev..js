var webpack = require('webpack');
var  path =  require('path');

module.exports = {
  entry: {
      app: path.resolve(__dirname, 'src/index.js')
    
  },
  output: {
    path: path.resolve(__dirname, 'src'),
    filename: 'app.bundle.js'
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({
      debug: false,
      noInfo: true
    })
  ],
  module: {
    rules: [
      { 
        test: /\.css$/, 
        loaders: ['style-loader', 'css-loader'] 
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        query: { 
            presets: ['env']
        
        }
      }
    ]
  }
}