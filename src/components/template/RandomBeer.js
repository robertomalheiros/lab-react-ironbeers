import React from "react";

import Main from "../template/Main";

function RandomBeer() {
  return (
    <Main icon="home" title="Início" subtitle="Criando cervejas">
      <div className="display-4">Cerveja Aleatória</div>
      <hr />
      <p className="mb-0">Cerveja Selecionada</p>
    </Main>
  );
}

export default RandomBeer;
