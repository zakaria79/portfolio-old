const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: {
    portfolio: './web/js/portfolio/index.js',
    passwordValidation: './web/js/portfolio/admin/passwordValidation.js'
  },


  plugins: [

// En prod
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
        drop_console: false,
      }
    })

  ],


  devtool: 'inline-source-map',
  watch: true,
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /(node_modules|bower_components)/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['env']
        }
      }
    }]
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'web/js/dist')
  }
};
