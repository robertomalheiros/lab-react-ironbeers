import React from "react";
import { Route, Routes } from "react-router";
import AllBeers from "../components/template/AllBeers";
import RandomBeer from "../components/template/RandomBeer";
import NewBeer from "../components/user/NewBeer";
import BeerDetalhes from "../components/template/BeerDetalhes";
/* */

function Rotas() {
  return (
    <Routes>
      <Route path="/" element={<AllBeers />} />
      <Route path="/beers" element={<AllBeers />} />
      <Route path="/new-beer" element={<NewBeer />} />
      <Route path="/random-beer" element={<RandomBeer />} />
      <Route path="/detalhes-beer/:beerID" element={<BeerDetalhes />} />
    </Routes>
  );
}

export default Rotas;
