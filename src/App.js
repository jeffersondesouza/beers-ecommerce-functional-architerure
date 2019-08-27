import React from "react";
import { Redirect, Switch, Route, Link } from "react-router-dom";
import HomePage from "./components/HomePage";
import LoginPage from "./components/LoginPage";
import BuyPage from "./components/BuyPage";
import BeerPage from "./components/BeerPage";


function App() {
  return (
    <div>
      <header>
        <nav>
          <Link to="/">
            <h1>Suco de Cevadis</h1>
          </Link>
          <span>10</span>
          <Link to="/cervejas">Cervejis</Link>
          <Link to="/login">login</Link>
          <Link to="/sacola">sacolis</Link>
          <Link to="/login">logout</Link>
        </nav>
      </header>
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
