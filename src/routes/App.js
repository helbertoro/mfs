import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { Home } from '../containers/Home';
import { Nosotros } from '../containers/Nosotros';
import { Produccion } from '../containers/Produccion';
import { Transmision } from '../containers/Transmision';
import { Marketing } from '../containers/Marketing';
import { Web } from '../containers/Web';
import { Diseno } from '../containers/Diseno';
import { Fotografia } from '../containers/Fotografia';
import { Eventos } from '../containers/Eventos';
import { Portafolio } from '../containers/Portafolio';
import { Blog } from '../containers/Blog';
import { Contacto } from '../containers/Contacto';
import { Servicios } from '../containers/Servicios';
import { NotFound } from '../containers/NotFound';

const App = () => (
  <BrowserRouter basename="/">
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/nosotros" component={Nosotros} />
      <Route exact path="/servicios" component={Servicios} />
      <Route exact path="/servicios/produccion-de-video" component={Produccion} />
      <Route exact path="/servicios/transmisiones-de-video-en-vivo" component={Transmision} />
      <Route exact path="/servicios/marketing-digital" component={Marketing} />
      <Route exact path="/servicios/sitios-web" component={Web} />
      <Route exact path="/servicios/diseño-grafico" component={Diseno} />
      <Route exact path="/servicios/fotografia-profesional" component={Fotografia} />
      <Route exact path="/servicios/eventos-corporativos" component={Eventos} />
      <Route exact path="/portafolio" component={Portafolio} />
      <Route exact path="/blog" component={Blog} />
      <Route exact path="/contacto" component={Contacto} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default App;
