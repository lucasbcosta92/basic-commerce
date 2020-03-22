import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Product from './pages/Product';
import Filters from './pages/Filters/Color';
import Search from './pages/Filters/Search';

export default function Routes() {
  return (
    /*
      Switch - Obriga a utilização de apenas um rota por vez
      Route - Define a rota
     */
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/cart" component={Cart} />
      <Route path="/product/:product" component={Product} />
      <Route path="/products/filter/color/:filter" component={Filters} />
      <Route path="/search/:search" component={Search} />
    </Switch>
  );
}
