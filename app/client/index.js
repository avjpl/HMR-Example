import React from 'react';
import routes from '../shared/routes';
import { render } from 'react-dom';
import { Router, browserHistory, match } from 'react-router';

render((
    <Router history={ browserHistory } routes={routes} />
), document.getElementById('app'));

//Check for updates and apply it
if (module.hot) {
  module.hot.accept('../shared/routes', () => {
    require('../shared/routes');

    render((
        <Router history={ browserHistory } routes={routes} />
    ), document.getElementById('app'));
  });
}
