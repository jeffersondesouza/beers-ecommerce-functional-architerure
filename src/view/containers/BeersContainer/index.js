import React, { useEffect } from "react";
import { connect } from "react-redux";

import Beers from "../../components/Beers";

import actions from "../../../store/rootActions";

const BeersContainer = props => {
  const { dispatchLoadBeers, isLoadingBeers, beersList } = props;

  useEffect(() => {
    dispatchLoadBeers();
  }, [dispatchLoadBeers]);

  return (
    <>
      <Beers beersList={beersList} isLoadingBeers={isLoadingBeers} />
    </>
  );
};

const mapStateToProps = state => ({
  beersList: state.beers.beersList,
  error: state.beers.error,
  isLoadingBeers: state.beers.isLoadingBeers
});

const mapDispatchToProps = dispatch => ({
  dispatchLoadBeers: () => dispatch(actions.beer.loadBeersRequest())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BeersContainer);
