import React from "react";
import { connect } from "react-redux";

import actions from "../../../store/rootActions";
import Product from "../../components/Product";

const ShoppingCartContainer = props => {
  const { products } = props;

  return (
    <>
      <div className="ShoppingCartPage__products">
        {products.map(item => (
          <Product key={item.id} {...item} />
        ))}
      </div>
      <footer className="ShoppingCartPage__footer">
        <button className="btn">Confirmar Compra</button>
      </footer>
    </>
  );
};

const mapStateToProps = state => ({
  products: state.shoppingCart.products,
  error: state.shoppingCart.error
});

const mapDispatchToProps = dispatch => ({
  dispatchLoadBeers: page => dispatch(actions.beer.loadBeersRequest(page)),
  dispatchAddProduct: product =>
    dispatch(actions.shoppingCart.addProduct(product))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShoppingCartContainer);
