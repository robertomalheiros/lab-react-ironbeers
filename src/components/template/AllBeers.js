import React from "react";
import Ibeers from "../../assets/imgs/beers.png";
import Main from "../template/Main";

function AllBeers() {
  return (
    <Main>
      <img src={Ibeers} alt="logo" />
      <div className="display-4">Lista de geladas!</div>
      <hr />
      <p className="mb-0">Todas as Cervejas</p>
    </Main>
  );
}

export default AllBeers;
