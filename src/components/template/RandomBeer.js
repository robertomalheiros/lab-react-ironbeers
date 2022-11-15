import React from "react";

import Irandombeer from "../../assets/imgs/random-beer.png";
import Main from "../template/Main";

function RandomBeer() {
  return (
    <Main>
      <img src={Irandombeer} alt="logo" />
      <h3>Cerveja Aleatória</h3>
      <hr />
      <p>Cerveja Selecionada</p>
    </Main>
  );
}

export default RandomBeer;
