import React from "react";
import Ibeers from "../../assets/imgs/beers.png";
import Main from "../template/Main";
import { useState, useEffect } from "react";
import axios from "axios";

function AllBeers() {
  const [cervejas, setcervejas] = useState([]);
  const [reload, setReload] = useState(false);

  //fetch -> api do navegador -> requisições http (get, put, pacth, delete, post) -> axios
  //promisses -> async/await

  //useEffect()
  // array de dependencias
  // [] -> vai rodar APENAS uma vez -> quando o componente/pagina for carregado
  // [state] -> toda vez que esse state MUDAR DE VALOR -> o código dentro do useEffect roda novamente.

  useEffect(() => {
    async function fetchStudents() {
      const response = await axios.get("https://ironbeer-api.fly.dev/ ");
      setcervejas(response.data);
    }

    fetchStudents();
  }, [reload]);

  function handleReload() {
    setReload(!reload);
  }

  console.log(cervejas);

  return (
    <Main>
      <img src={Ibeers} alt="logo" />
      <div className="display-4">Lista de geladas!</div>

      <button onClick={handleReload}>Recarregar api!!</button>

      {cervejas.map((cerveja) => {
        return (
          <div className="cerveja" key={cerveja._id}>
            <div>
              <img className="imgCervejas" src={cerveja.image} alt="logo" />
            </div>
            <div>
              <p className="mb-3">{cerveja.nome}</p>
              <p className="mb-0">{cerveja.tagline}</p>
              <p className="mb-0">Created by: {cerveja.contributed_by}</p>
            </div>
          </div>
        );
      })}
    </Main>
  );
}

export default AllBeers;
