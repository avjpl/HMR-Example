module.exports = options => {
  const start = (dependencies, cb) => {
    return cb(null,
      {
        server: {
            host: '127.0.0.1',
            port: 3010
        },
        app: {
            etag: true
        },
        logger: {
          level: 'warn'
        }
      }
    );
  };

  return {
    start: start
  };
};
