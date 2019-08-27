import React from "react";
import { Link } from "react-router-dom";

// a Ideia é ter 3 request emapralelo com num dashboard
const Home = () => {
  return (
    <section>
      <div>
        Lista de cervejas (https://api.punkapi.com/v2/beers?page=1&per_page=10)
        <Link to="/cervejas/1">Cerveja 1</Link>
      </div>
      <div>
        <div>Cerveja do mês (https://api.punkapi.com/v2/beers/random)</div>
        <div>
          Dica do Cervejeiris
          (https://api.punkapi.com/v2/beers/random),brewers_tips{" "}
        </div>
      </div>
    </section>
  );
};

export default Home;
