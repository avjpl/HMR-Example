const express = require('express');
const webpack = require('webpack');
const cors = require('cors');
const webpackDevMiddleware = require('webpack-dev-middleware');

const router = express.Router();

const handleRequest = require('../../server/utils/handleRequest');
const config = require('../../../webpack.config.dev');

module.exports = function() {
  function start({ app, env, wpConfig }, cb) {
    app.use(cors());
    if (env.name = 'development') {
      const compiler = webpack(wpConfig);
      app.use(webpackDevMiddleware(compiler, {
        noInfo: true,
        publicPath: wpConfig.output.publicPath,
      }));

      app.use(require("webpack-hot-middleware")(compiler, {
        log: console.log,
      }));
    } else {
      app.use(require('compression')());
    }

    app.use(express.static('dist'));
    app.get('*', handleRequest().init);
    app.use('/', router);

    return cb(null, router);
  }

  return {
    start: start
  };
}
