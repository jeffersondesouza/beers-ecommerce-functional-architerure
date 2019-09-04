import React from "react";
import { Redirect, Switch, Route } from "react-router-dom";

import { HomePage, LoginPage, ShoppingCartPage, BeerPage } from "./view/pages";
import HeaderContainer from "./view/containers/HeaderContainer";

function App() {
  return (
    <div>
      <HeaderContainer />
      <Switch>
        <Route exact path="/" render={() => <Redirect to="/cervejas" />} />
        <Route exact path="/cervejas" component={HomePage} />
        <Route exact path="/cervejas/:id" component={BeerPage} />
        <Route exact path="/sacola" component={ShoppingCartPage} />
        <Route exact path="/login" component={LoginPage} />
      </Switch>
    </div>
  );
}

export default App;
