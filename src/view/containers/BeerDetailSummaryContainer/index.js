import React, { useEffect } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import actions from "../../../store/rootActions";

import BeerDetailsSummary from "../../components/BeerDetailsSummary";

const BeerDetailSummaryContainer = props => {
  const {
    match,
    dispatchLoadBeer,
    isLoadingSelectedBeer,
    selectedBeer
  } = props;

  useEffect(() => {
    dispatchLoadBeer(match.params.id);
  }, [match, dispatchLoadBeer]);

  return (
    <>
      {isLoadingSelectedBeer || !selectedBeer.id ? (
        <div>Carregando</div>
      ) : (
        <BeerDetailsSummary
          name={selectedBeer.name}
          tagline={selectedBeer.tagline}
          firstBrewed={selectedBeer.firstBrewed}
          description={selectedBeer.description}
          boilVolume={selectedBeer.boilVolume}
          foodPairing={selectedBeer.foodPairing}
          ingredients={selectedBeer.ingredients}
        />
      )}
    </>
  );
};

const mapStateToProps = state => ({
  selectedBeer: state.beers.selectedBeer,
  isLoadingSelectedBeer: state.beers.isLoadingSelectedBeer,
  error: state.beers.error
});

const mapDispatchToProps = dispatch => ({
  dispatchLoadBeer: beerId => dispatch(actions.beer.loadBeerRequest(beerId))
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(BeerDetailSummaryContainer)
);
