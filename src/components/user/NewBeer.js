import React from "react";
import Inewbeers from "../../assets/imgs/new-beer.png";
import Main from "../template/Main";

function NewBeer() {
  return (
    <Main title="Início" subtitle="Criando cervejas">
      <img src={Inewbeers} alt="logo" />
      <div>Vamos cadastrar uma nova Cerveja?!</div>
      <hr />
      <p>Cadastrando novas cervejas</p>
    </Main>
  );
}

export default NewBeer;
