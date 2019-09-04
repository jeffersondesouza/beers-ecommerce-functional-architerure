// @flow

import * as React from "react";
import { connect } from "react-redux";

import actions from "../../../store/rootActions";
import Product from "../../components/Product";

type product = {
  id: number
};

type StoreProps = {
  products: product[],
  error: any,
  dispatchRemoveProduct: number => void,
  dispatchBuy: () => void,
  dispatchIncreaseProduct: (number, ?number) => void,
  dispatchDecreaseProduct: (number, ?number) => void
};

type Props = {
  ...StoreProps
};

const ShoppingCartContainer = (props: Props) => {
  const { products } = props;

  const handleRemoveProduct = id => () => props.dispatchRemoveProduct(id);

  const handleBuy = () => props.dispatchBuy();

  const handleIncreaseProduct = (itemId: number) => () =>
    props.dispatchIncreaseProduct(itemId);

  const handleDecreaseProduct = (itemId: number) => () =>
    props.dispatchDecreaseProduct(itemId, 1);

  return (
    <>
      <div className="ShoppingCartPage__products">
        {products.map(item => (
          <Product
            onRemoveProduct={handleRemoveProduct}
            onIncreaseProduct={handleIncreaseProduct(item.id)}
            onDecreaseProduct={handleDecreaseProduct(item.id)}
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

const mapStateToProps = (state: any): any => ({
  products: state.shoppingCart.products,
  error: state.shoppingCart.error
});

const mapDispatchToProps = dispatch => ({
  dispatchRemoveProduct: id => dispatch(actions.shoppingCart.removeProduct(id)),
  dispatchBuy: () => dispatch(actions.shoppingCart.buyRequest()),
  dispatchIncreaseProduct: item =>
    dispatch(actions.shoppingCart.increaseProduct(item)),
  dispatchDecreaseProduct: item =>
    dispatch(actions.shoppingCart.decreaseProduct(item, 1))
});

export default connect<Props, StoreProps, _, _, _, _>(
  mapStateToProps,
  mapDispatchToProps
)(ShoppingCartContainer);
