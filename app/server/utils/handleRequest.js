const React = require('react');
const { renderToString } = require('react-dom/server');
const { match, RouterContext } = require('react-router');

const routes = require('../../shared/routes').default;

module.exports = () => ({
  init: (req, res) => {
    match({ routes, location: req.url }, (err, redirect, props) => {
      if (err) return res.status(500).end('Internal server error');
      if (!props) return res.status(404).end('Not found!');

      const html = renderToString(
        <RouterContext { ...props } />
      );

      const initialState = JSON.stringify({ data: 1234 });

      res.render('index', { html, initialState });
    });
  }
});
