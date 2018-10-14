// This is the base webpack config that other configs build upon

// Write a config.json to lib containing globals like SDK_VERSION
require('./writeConfig');

module.exports = {
  module: {
    loaders: [
      {
        test: /\.js?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      { test: /\.json$/, loader: 'json' }
    ]
  }
};
