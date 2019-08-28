import React from "react";
import { Link } from "react-router-dom";

import "./styles.scss";
import DashboardCard from "../DashboardCard";
import BeerOfMonth from "../BeerOfMonth";

// a Ideia é ter 3 request emapralelo com num dashboard
const HomePage = () => {
  return (
    <section className="HomePage">
      <div className="HomePage__main">
        Lista de cervejas (https://api.punkapi.com/v2/beers?page=1&per_page=10)
        <Link to="/cervejas/1">Cerveja 1</Link>
      </div>
      <div className="HomePage__aside">
        <DashboardCard title="Suco do Mesis">
          <BeerOfMonth {...BEER} />
        </DashboardCard>
        <DashboardCard title="Dica do Cervejeiris">
          <span>{TIP}</span>
        </DashboardCard>
      </div>
    </section>
  );
};

export default HomePage;

const TIP =
  "Hold the mash for longer at 63-64°C to get more fermentability from the wort.";

const BEER = {
  id: 44,
  name: "Dog Wired (w/8 Wired)",
  tagline: "New Zealand Imperial Pilsner.",
  first_brewed: "06/2013",
  description:
    "Brewed in collaboration with Soren from New Zealand’s stellar 8-Wired brewery, this is an Imperial Pilsner featuring two of our favourite New Zealand hops: Nelson Sauvin and Motueka. Sitting at a dangerously drinkable 7.1% ABV there’s a touch of Munich malt which gives this beer that little extra caramel biscuit bite to compliment the lip smackingly tropical hops. Expect an all out NZ hoppy riot.",
  imageUrl: "https://images.punkapi.com/v2/44.png",
  abv: 7.1,
  ibu: 65,
  target_fg: 1010,
  target_og: 1065,
  ebc: 13,
  srm: 6.5,
  ph: 4.4,
  attenuation_level: 85,
  volume: { value: 20, unit: "litres" },
  boil_volume: { value: 25, unit: "litres" },
  method: {
    mash_temp: [{ temp: { value: 64, unit: "celsius" }, duration: 90 }],
    fermentation: { temp: { value: 9, unit: "celsius" } },
    twist: null
  },
  ingredients: {
    malt: [
      { name: "Extra Pale", amount: { value: 4.7, unit: "kilograms" } },
      { name: "Munich", amount: { value: 0.38, unit: "kilograms" } },
      { name: "Acidulated Malt", amount: { value: 0.63, unit: "kilograms" } }
    ],
    hops: [
      {
        name: "Nelson Sauvin",
        amount: { value: 20, unit: "grams" },
        add: "start",
        attribute: "bitter"
      },
      {
        name: "Motueka",
        amount: { value: 20, unit: "grams" },
        add: "start",
        attribute: "bitter"
      },
      {
        name: "Nelson Sauvin",
        amount: { value: 10, unit: "grams" },
        add: "middle",
        attribute: "flavour"
      },
      {
        name: "Motueka",
        amount: { value: 10, unit: "grams" },
        add: "middle",
        attribute: "flavour"
      },
      {
        name: "Nelson Sauvin",
        amount: { value: 20, unit: "grams" },
        add: "end",
        attribute: "flavour"
      },
      {
        name: "Motueka",
        amount: { value: 20, unit: "grams" },
        add: "end",
        attribute: "flavour"
      },
      {
        name: "Motueka",
        amount: { value: 100, unit: "grams" },
        add: "dry hop",
        attribute: "aroma"
      },
      {
        name: "Nelson Sauvin",
        amount: { value: 87.5, unit: "grams" },
        add: "dry hop",
        attribute: "aroma"
      }
    ],
    yeast: "Wyeast 2007 - Pilsen Lager™"
  },
  food_pairing: [
    "Spiced and blackened cajun chicken",
    "Pork belly vindaloo",
    "Rhubarb pie"
  ],
  brewers_tips:
    "Hold the mash for longer at 63-64°C to get more fermentability from the wort.",
  contributed_by: "Sam Mason <samjbmason>"
};
