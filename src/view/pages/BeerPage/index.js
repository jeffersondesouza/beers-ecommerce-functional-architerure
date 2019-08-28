import React from "react";

import "./styles.scss";
import BeerDetailsImageContainer from "../../containers/BeerDetailsImageContainer";
import BeerDetailSummaryContainer from "../../containers/BeerDetailSummaryContainer";

const BeerPage = () => (
  <div className="BeerPage">
    <div className="BeerPage__picture">
      <BeerDetailsImageContainer />
    </div>
    <div className="BeerPage__summary">
      <BeerDetailSummaryContainer />
    </div>
  </div>
);

export default BeerPage;
