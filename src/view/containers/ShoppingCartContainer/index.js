import React from "react";
import { connect } from "react-redux";

import actions from "../../../store/rootActions";
import Product from "../../components/Product";

const ShoppingCartContainer = props => {
  const { products } = props;

  const handleRemoveProduct = id => () => props.dispatchRemoveProduct(id);

  return (
    <>
      <div className="ShoppingCartPage__products">
        {products.map(item => (
          <Product
            onRemoveProduct={handleRemoveProduct}
            key={item.id}
            {...item}
          />
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
  dispatchRemoveProduct: id => dispatch(actions.shoppingCart.removeProduct(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShoppingCartContainer);
