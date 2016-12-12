const React = require('react');
const { renderToString } = require('react-dom/server');
const { match, RouterContext } = require('react-router');

const routes = require('../../shared/routes').default;
const fetchComponentData = require('./fetchData').default;

module.exports = () => ({
  init: (req, res) => {
    match({ routes, location: req.url }, (err, redirect, props) => {
      if (err) return res.status(500).end('Internal server error');
      if (!props) return res.status(404).end('Not found!');

      fetchComponentData(props.components)
        .then(data => {
          const html = renderToString(
            <RouterContext {...props} />
          );

          res.render('index', { html, data: JSON.stringify(data[0]) });
        })
        .catch(err => res.end(err.message));
    });
  }
});
