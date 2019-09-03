const beerIngredients = ingredients => ({ ...ingredients });

const BeerModel = item => ({
  id: item.id,
  abv: item.abv,
  name: item.name,
  imageUrl: item.imageUrl,
  tagline: item.tagline,
  firstBrewed: item.firstBrewed,
  description: item.description,
  boilVolume: item.boilVolume,
  foodPairing: item.foodPairing,
  ingredients: beerIngredients(item.ingredients)
});

export default BeerModel;
