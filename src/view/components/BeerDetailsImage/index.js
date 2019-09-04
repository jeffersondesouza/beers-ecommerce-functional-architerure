import React from "react";
import "./styles.scss";

const BeerDetailsImage = ({ imageUrl, name }) => (
  <img
    className="BeerDetailsImage"
    src={imageUrl}
    alt={`Imagem de uma garrafa da cerveja ${name}`}
  />
);

export default BeerDetailsImage;
