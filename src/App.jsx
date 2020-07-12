import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';

import { RouteWrapper } from 'views/.components/RouteWrapper';

import { Layout } from 'views/.components/Layout';

import { Home } from 'views/Home';

export const App = () => (
  <Router>
    <Switch>
      <RouteWrapper exact path="/" component={Home} layout={Layout} />
    </Switch>
  </Router>
);
