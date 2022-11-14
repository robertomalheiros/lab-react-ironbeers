import React from "react";

import Main from "../template/Main";

function NewBeer() {
  return (
    <Main icon="home" title="Início" subtitle="Criando cervejas">
      <div className="display-4">Vamos cadastrar uma nova Cerveja?!</div>
      <hr />
      <p className="mb-0">Cadastrando novas cervejas</p>
    </Main>
  );
}

export default NewBeer;
