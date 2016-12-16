module.exports = options => {
  const start = ({ env }, cb) => {
    const config = (env => {
      return {
        development: require('../../../webpack.config.dev'),
        production: require('../../../webpack.config.prod')
      }[env.name];
    })(env);

    return cb(null, config);
  };

  return {
    start: start
  };
};
