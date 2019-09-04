import React from "react";
import "./styles.scss";
import ShoppingCartContainer from "../../containers/ShoppingCartContainer";

const ShoppingCartPage = () => {
  return (
    <div className="ShoppingCartPage">
      <header className="ShoppingCartPage__header">
        <h2 className="ShoppingCartPage__title">Sua Sacolis de Cervadis</h2>
      </header>
      <ShoppingCartContainer />
    </div>
  );
};

export default ShoppingCartPage;
