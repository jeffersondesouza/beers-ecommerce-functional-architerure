import React from "react";
import { Redirect, Switch, Route } from "react-router-dom";

import { HomePage, LoginPage, BuyPage, BeerPage } from "./view/pages";
import Header from "./view/components/Header";


function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" render={() => <Redirect to="/cervejas" />} />
        <Route exact path="/cervejas" component={HomePage} />
        <Route exact path="/cervejas/:id" component={BeerPage} />
        <Route exact path="/sacola" component={BuyPage} />
        <Route exact path="/login" component={LoginPage} />
      </Switch>
    </div>
  );
}

export default App;
