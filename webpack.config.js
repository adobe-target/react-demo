var webpack = require('webpack');
var path = require('path');
var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  context: path.join(__dirname, './'),
  entry: './src/index.js',
  output: {
    path: './public/assets',
    filename: 'js/app.js'
  },
  resolve: {
    alias: {
      resources: path.resolve(__dirname, 'src/resources/')
    },
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [{
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      query: {
        presets: ['babel-preset-es2015', 'babel-preset-react'].map(require.resolve)
      }
    },
      {
        test: /\.(jpg|jpeg|gif|png)$/,
        exclude: /node_modules/,
        loader: 'url-loader?limit=1024&name=images/[name].[ext]'
      }
    ]
  },
  plugins: [
    new CopyWebpackPlugin([
      {
        from: 'resources/**/*'
      }
    ])
  ],
  devServer: {
    port: 3000,
    hot: true,
    historyApiFallback: true,
    contentBase: './public',
    watchContentBase: true
  }
};
