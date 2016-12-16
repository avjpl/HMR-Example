import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './containers/App';
import Home from './components/Home';
import About from './components/About';
import Blog from './components/Blog';

const routes = (
  <Route path="/" component={ App }>
    <IndexRoute component={ Home }/>
    <Route path="/home" component={ Home } />
    <Route path="/blog" component={ Blog } />
    <Route path="/about" component={ About } />
  </Route>
);

export default routes;
