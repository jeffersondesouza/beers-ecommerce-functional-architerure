import React from "react";
import { Link } from "react-router-dom";

import "./styles.scss";

const BeerPage = () => {
  const {
    imageUrl,
    ingredients,
    name,
    tagline,
    firstBrewed,
    description,
    foodPairing,
    boilVolume
  } = BEER;

  return (
    <div className="BeerPage">
      <div className="BeerPage__picture">
        <img
          className="BeerPage__img"
          src={imageUrl}
          alt={`Imagem de uma garrafa da cerveja ${name}`}
        />
      </div>
      <div className="BeerPage__summary">
        <h2 className="BeerPage__name">{name}</h2>
        <p className="BeerPage__tagline">{tagline}</p>
        <p className="BeerPage__firstBrewed">Desde: {firstBrewed}</p>
        {/* TODO: criar um conversor do volume litres para litros */}
        <p className="BeerPage__boilVolume">
          Volume: {boilVolume.value} {boilVolume.unit}
        </p>
        <p className="BeerPage__description">Descrição: {description}</p>
        <div className="BeerPage__ingredients">
          <h4>Ingredientes</h4>
          {/* TODO: um conversor de Objeto para array pois igredeintes é um objeto */}
          <div>Malt: "Maris Otter Extra Pale",</div>
          <div>Quantidade: 3.3 kg</div>
        </div>
        <div className="BeerPage__foodPairing">
          <h4>Harmonização</h4>
          {foodPairing.map(item => (
            <div key={item}>{item}</div>
          ))}
        </div>
        <footer className="BeerPage__footer">
          <button className="BeerPage__footer-btn">Adicionar à Sacola</button>
          <Link to="/sacola" className="BeerPage__footer-link">Ver Items da sacola</Link>
        </footer>
      </div>
    </div>
  );
};

export default BeerPage;

const BEER = {
  id: 1,
  name: "Buzz",
  tagline: "A Real Bitter Experience.",
  firstBrewed: "09/2007",
  description:
    "A light, crisp and bitter IPA brewed with English and American hops. A small batch brewed only once.",
  imageUrl: "https://images.punkapi.com/v2/keg.png",
  abv: 4.5,
  ibu: 60,
  target_fg: 1010,
  target_og: 1044,
  ebc: 20,
  srm: 10,
  ph: 4.4,
  attenuationLevel: 75,
  volume: { value: 20, unit: "litres" },
  boilVolume: { value: 25, unit: "litres" },
  method: {
    mash_temp: [{ temp: { value: 64, unit: "celsius" }, duration: 75 }],
    fermentation: { temp: { value: 19, unit: "celsius" } },
    twist: null
  },
  ingredients: {
    malt: [
      {
        name: "Maris Otter Extra Pale",
        amount: { value: 3.3, unit: "kilograms" }
      },
      { name: "Caramalt", amount: { value: 0.2, unit: "kilograms" } },
      { name: "Munich", amount: { value: 0.4, unit: "kilograms" } }
    ],
    hops: [
      {
        name: "Fuggles",
        amount: { value: 25, unit: "grams" },
        add: "start",
        attribute: "bitter"
      },
      {
        name: "First Gold",
        amount: { value: 25, unit: "grams" },
        add: "start",
        attribute: "bitter"
      },
      {
        name: "Fuggles",
        amount: { value: 37.5, unit: "grams" },
        add: "middle",
        attribute: "flavour"
      },
      {
        name: "First Gold",
        amount: { value: 37.5, unit: "grams" },
        add: "middle",
        attribute: "flavour"
      },
      {
        name: "Cascade",
        amount: { value: 37.5, unit: "grams" },
        add: "end",
        attribute: "flavour"
      }
    ],
    yeast: "Wyeast 1056 - American Ale™"
  },
  foodPairing: [
    "Spicy chicken tikka masala",
    "Grilled chicken quesadilla",
    "Caramel toffee cake"
  ],
  brewers_tips:
    "The earthy and floral aromas from the hops can be overpowering. Drop a little Cascade in at the end of the boil to lift the profile with a bit of citrus.",
  contributed_by: "Sam Mason <samjbmason>"
};
