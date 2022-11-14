import React from "react";
import { Route, Routes } from "react-router";

import Home from "../components/home/Home";
import AllBeers from "../components/template/AllBeers";
import RandomBeer from "../components/template/RandomBeer";
import NewBeer from "../components/user/NewBeer";

function Rotas() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/beers" element={<AllBeers />} />
      <Route path="/new-beer" element={<NewBeer />} />
      <Route path="/random-beer" element={<RandomBeer />} />
    </Routes>
  );
}

export default Rotas;
