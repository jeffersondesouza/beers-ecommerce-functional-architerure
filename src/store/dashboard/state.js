const TIP =
  "Hold the mash for longer at 63-64°C to get more fermentability from the wort.";

const BEER = {
  id: 44,
  name: "Dog Wired (w/8 Wired)",
  tagline: "New Zealand Imperial Pilsner.",
  imageUrl: "https://images.punkapi.com/v2/44.png",
  abv: 7.1
};

export default {
  error: { msg: "", hasError: false, data: {} },
  beerOfMoth: BEER,
  tip: TIP,
  isLoadingDashboard: false
};
