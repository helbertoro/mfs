import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { Home } from '../containers/Home';
import { Nosotros } from '../containers/Nosotros';
import { Portafolio } from '../containers/Portafolio';
import { NotFound } from '../containers/NotFound';

const App = () => (
  <BrowserRouter basename="/">
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/nosotros" component={Nosotros} />
      <Route exact path="/portafolio" component={Portafolio} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default App;
