import React, { useEffect } from "react";
import { connect } from "react-redux";

import actions from "../../../store/rootActions";

import Beers from "../../components/Beers";


const BeersContainer = props => {
  const { dispatchLoadBeers, isLoadingBeers, beersList } = props;

  useEffect(() => {
    dispatchLoadBeers(1);
  }, [dispatchLoadBeers]);

  const handleAddToCart = item => () => props.dispatchAddProduct(item);

  return (
    <>
      <Beers
        onAddToCart={handleAddToCart}
        beersList={beersList}
        isLoadingBeers={isLoadingBeers}
      />
    </>
  );
};

const mapStateToProps = state => ({
  beersList: state.beers.beersList,
  error: state.beers.error,
  isLoadingBeers: state.beers.isLoadingBeers
});

const mapDispatchToProps = dispatch => ({
  dispatchLoadBeers: page => dispatch(actions.beer.loadBeersRequest(page)),
  dispatchAddProduct: product =>
    dispatch(actions.shoppingCart.addProduct(product))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BeersContainer);
