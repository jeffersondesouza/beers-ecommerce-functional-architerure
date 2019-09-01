const totalAmount = products => products.reducer(sumAmount, 0);

const sumAmount = (total, item) => (total += item.attenuationLevel);

const shoppingCartProduct = product => ({
  id: product.id,
  tagline: product.tagline,
  name: product.name,
  abv: product.abv,
  imageUrl: product.imageUrl
});

const ShoppingCartModel = products => ({
  products: products.map(shoppingCartProduct),
  total: products.length,
  amount: totalAmount(products)
});

export default ShoppingCartModel;
