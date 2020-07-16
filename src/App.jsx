import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';

import { RouteWrapper } from 'views/.components/RouteWrapper';

import { Layout } from 'views/.components/Layout';

import { Home } from 'views/Home';

import { LanguageProvider } from 'views/.tools/Providers/LanguageProvider';
import { MessagesProvider } from 'views/.tools/Providers/MessagesProvider';

export const App = () => (
  <LanguageProvider>
    <MessagesProvider>
      <Router>
        <Switch>
          <RouteWrapper exact path="/" component={Home} layout={Layout} />
        </Switch>
      </Router>
    </MessagesProvider>
  </LanguageProvider>
);
