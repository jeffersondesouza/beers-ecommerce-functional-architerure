import React, { useEffect } from "react";

import { connect } from "react-redux";

import actions from "../../../store/rootActions";

import DashboardCard from "../../components/DashboardCard";
import BeerOfMonth from "../../components/BeerOfMonth";
import BrewersTips from "../../components/BrewersTips";

// a Ideia é ter 2 requests em paralelo no sagas desse cara

const DashboardContainer = props => {
  const { beerOfMoth, tip, dispatchLoadDashboard } = props;

  useEffect(() => {
    dispatchLoadDashboard();
  }, [dispatchLoadDashboard]);

  return (
    <>
      <DashboardCard title="Suco do Mesis">
        <BeerOfMonth {...beerOfMoth} />
      </DashboardCard>
      <DashboardCard title="Dica do Cervejeiris">
        <BrewersTips tip={tip} />
      </DashboardCard>
    </>
  );
};

const mapStateToProps = state => ({
  beerOfMoth: state.dashboard.beerOfMoth,
  tip: state.dashboard.tip,
  error: state.dashboard.error
});

const mapDispatchToProps = dispatch => ({
  dispatchLoadDashboard: () =>
    dispatch(actions.dashboard.loadDashboardRequest())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DashboardContainer);
