// @flow
import type {Beer} from "../../../types/Beer";


const beerIngredients = ingredients => ({ ...ingredients });

const BeerFactory = (params: any): Beer => ({
  id: params.id,
  abv: params.abv,
  name: params.name,
  imageUrl: params.imageUrl,
  tagline: params.tagline,
  firstBrewed: params.firstBrewed,
  description: params.description,
  boilVolume: params.boilVolume,
  foodPairing: params.foodPairing,
  ingredients: beerIngredients(params.ingredients)
});

export default BeerFactory;
