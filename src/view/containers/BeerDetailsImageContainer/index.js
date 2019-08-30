import React from "react";
import { connect } from "react-redux";

import BeerDetailsImage from "../../components/BeerDetailsImage";

const BeerDetailsImageContainer = props => {
  const { imageUrl, name, isLoadingSelectedBeer, selectedBeerId } = props;

  return (
    <>
      {!isLoadingSelectedBeer && selectedBeerId && (
        <BeerDetailsImage imageUrl={imageUrl} name={name} />
      )}
    </>
  );
};

const mapStateToProps = state => ({
  selectedBeerId: state.beers.selectedBeer.id,
  imageUrl: state.beers.selectedBeer.imageUrl,
  isLoadingSelectedBeer: state.beers.isLoadingSelectedBeer,
  error: state.beers.error
});

export default connect(mapStateToProps)(BeerDetailsImageContainer);
