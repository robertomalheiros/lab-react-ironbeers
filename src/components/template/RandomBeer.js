import React from "react";

import Irandombeer from "../../assets/imgs/random-beer.png";
import Main from "../template/Main";

function RandomBeer() {
  return (
    <Main>
      <div className="ImgLogo">
        <img src={Irandombeer} alt="logo" />
      </div>
      <div className="AllBeersText">
        <h3>Cerveja Aleatória</h3>
        <hr />
        <p>Cerveja Selecionada</p>
      </div>
    </Main>
  );
}

export default RandomBeer;
