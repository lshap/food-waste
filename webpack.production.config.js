const webpack = require('webpack')
var config = require('./webpack.base.config.js')

config.plugins = config.plugins.concat([
  new webpack.DefinePlugin({
      'process.env': {
          'NODE_ENV': '"production"'
      }
  }),

  // keeps hashes consistent between compilations
  new webpack.optimize.OccurenceOrderPlugin(),

  // minifies your code
  new webpack.optimize.UglifyJsPlugin({
    compressor: {
      warnings: false
    }
  })
])

module.exports = config
