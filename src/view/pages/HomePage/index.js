import React from "react";

import "./styles.scss";
import BeersContainer from "../../containers/BeersContainer";
import DashboardContainer from "../../containers/DashboardContainer";

const HomePage = () => {
  return (
    <section className="HomePage">
      <div className="HomePage__main">
        <BeersContainer />
      </div>
      <div className="HomePage__aside">
        <DashboardContainer />
      </div>
    </section>
  );
};

export default HomePage;
