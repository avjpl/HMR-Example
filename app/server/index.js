const System = require('systemic');
const server = require('systemic-express').server;
const app = require('systemic-express').app;
const defaultMiddleware = require('systemic-express').defaultMiddleware;

const environment = require('./modules/environment');
const webpackConfig = require('./modules/webpack-config');
const config = require('./modules/config');
const routes = require('./routes');
const layoutSetup = require('../layoutSetup');

new System()
  .configure(config())
  .add('logger', console)
  .add('env', environment())
  .add('wpConfig', webpackConfig()).dependsOn('env')
  .add('app', app()).dependsOn('config')
  .add('routes', routes()).dependsOn('app', 'env', 'wpConfig')
  .add('middleware.default', defaultMiddleware()).dependsOn('routes', 'app')
  .add('server', server()).dependsOn('config', 'app', 'middleware.default')
  .start((err, { app, logger }) => {
    if (err) throw err;

    layoutSetup(app);

    logger.info('Started');
  });
