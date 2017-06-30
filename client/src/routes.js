import React from 'react';
import { Router, Route } from 'react-router';

import Home from './pages/home';
import About from './pages/about';
import NotFound from './pages/not-found';

const Routes = (props) => (
  <Router {...props}>
    <Route path="/" component={Home} />
    <Route path="/about" component={About} />
    <Route path="*" component={NotFound} />
  </Router>
);

export default Routes;