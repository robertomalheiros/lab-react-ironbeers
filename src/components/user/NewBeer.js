import React from "react";
import Inewbeers from "../../assets/imgs/new-beer.png";
import Main from "../template/Main";

function NewBeer() {
  return (
    <Main title="Início" subtitle="Criando cervejas">
      <div className="ImgLogo">
        <img src={Inewbeers} alt="logo" />
      </div>
      <div className="AllBeersText">
        <h3>Vamos cadastrar uma nova Cerveja?!</h3>
        <hr />
        <p>Cadastrando novas cervejas</p>
      </div>
    </Main>
  );
}

export default NewBeer;
