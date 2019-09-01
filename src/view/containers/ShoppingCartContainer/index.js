import React from "react";
import { connect } from "react-redux";

import actions from "../../../store/rootActions";
import Product from "../../components/Product";

const ShoppingCartContainer = props => {
  const { products } = props;

  const handleRemoveProduct = id => () => props.dispatchRemoveProduct(id);

  const handleBuy = () => props.dispatchBuy();

  const handleIncreaseProduct = item => () =>
    props.dispatchIncreaseProduct(item);

  return (
    <>
      <div className="ShoppingCartPage__products">
        {products.map(item => (
          <Product
            onRemoveProduct={handleRemoveProduct}
            onIncreaseProduct={handleIncreaseProduct(item)}
            key={item.id}
            {...item}
          />
        ))}
      </div>
      <footer className="ShoppingCartPage__footer">
        <button onClick={handleBuy} className="btn">
          Confirmar Compra
        </button>
      </footer>
    </>
  );
};

const mapStateToProps = state => ({
  products: state.shoppingCart.products,
  error: state.shoppingCart.error
});

const mapDispatchToProps = dispatch => ({
  dispatchRemoveProduct: id => dispatch(actions.shoppingCart.removeProduct(id)),
  dispatchBuy: () => dispatch(actions.shoppingCart.buyRequest()),
  dispatchIncreaseProduct: item =>
    dispatch(actions.shoppingCart.addProduct(item))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShoppingCartContainer);
