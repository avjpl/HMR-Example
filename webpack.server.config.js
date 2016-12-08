const fs = require('fs');
const path = require('path');
const validate = require('webpack-validator');

module.exports = validate({
  entry: path.resolve(__dirname, 'app', 'server', 'index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/server.bundle.js'
  },
  // keep node_module paths out of the bundle
  externals: fs.readdirSync(path.resolve(__dirname, 'node_modules')).concat([
    'react-dom/server', 'react/addons',
  ]).reduce((ext, mod) => {
    ext[mod] = 'commonjs ' + mod
    return ext;
  }, {}),
  node: {
    __filename: false,
    __dirname: false,
    console: true
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel'
      }
    ]
  }
});
