import React from "react";

import Irandombeer from "../../assets/imgs/random-beer.png";
import Main from "../template/Main";

function RandomBeer() {
  return (
    <Main>
      <img src={Irandombeer} alt="logo" />
      <div className="display-4">Cerveja Aleatória</div>
      <hr />
      <p className="mb-0">Cerveja Selecionada</p>
    </Main>
  );
}

export default RandomBeer;
