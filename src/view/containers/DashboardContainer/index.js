import React from "react";
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

export default DashboardContainer;

const TIP =
  "Hold the mash for longer at 63-64°C to get more fermentability from the wort.";

const BEER = {
  id: 44,
  name: "Dog Wired (w/8 Wired)",
  tagline: "New Zealand Imperial Pilsner.",
  imageUrl: "https://images.punkapi.com/v2/44.png",
  abv: 7.1
};
