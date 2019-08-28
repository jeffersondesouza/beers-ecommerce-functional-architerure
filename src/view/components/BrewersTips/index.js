import React from "react";
import "./styles.scss";

// (https://api.punkapi.com/v2/beers/radom) pegar o 'brewers_tips'
const BrewersTips = ({ tip }) => (
  <div className="BrewersTips">
    <p className="BrewersTips__tip">{tip}</p>
  </div>
);

export default BrewersTips;
