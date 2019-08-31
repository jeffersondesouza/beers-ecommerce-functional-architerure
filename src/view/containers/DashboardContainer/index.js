import React from "react";

import { connect } from "react-redux";

import actions from "../../../store/rootActions";

import DashboardCard from "../../components/DashboardCard";
import BeerOfMonth from "../../components/BeerOfMonth";
import BrewersTips from "../../components/BrewersTips";

// a Ideia é ter 2 requests em paralelo no sagas desse cara

const DashboardContainer = () => {
  return (
    <>
      <DashboardCard title="Suco do Mesis">
        <BeerOfMonth {...BEER} />
      </DashboardCard>
      <DashboardCard title="Dica do Cervejeiris">
        <BrewersTips tip={TIP} />
      </DashboardCard>
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
)(DashboardContainer);

const TIP =
  "Hold the mash for longer at 63-64°C to get more fermentability from the wort.";

const BEER = {
  id: 44,
  name: "Dog Wired (w/8 Wired)",
  tagline: "New Zealand Imperial Pilsner.",
  imageUrl: "https://images.punkapi.com/v2/44.png",
  abv: 7.1
};
