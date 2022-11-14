import React from "react";

import Main from "../template/Main";

function AllBeers() {
  return (
    <Main icon="home" title="Início" subtitle="Criando cervejas">
      <div className="display-4">Lista de geladas!</div>
      <hr />
      <p className="mb-0">Todas as Cervejas</p>
    </Main>
  );
}

export default AllBeers;
