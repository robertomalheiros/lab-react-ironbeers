import React from "react";
import Ibeers from "../../assets/imgs/beers.png";
import Main from "../template/Main";
import { useState, useEffect } from "react";
import axios from "axios";

function AllBeers() {
  const [cervejas, setcervejas] = useState([]);
  const [reload] = useState(false);

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

  return (
    <Main>
      <img src={Ibeers} alt="logo" />
      {cervejas.map((cerveja) => {
        return (
          <div className="cerveja" key={cerveja._id}>
            <div>
              <img className="imgCervejas" src={cerveja.image} alt="logo" />
            </div>
            <div>
              <h3>{cerveja.nome}</h3>
              <p>{cerveja.tagline}</p>
              <p>
                <bold> Created by:</bold> {cerveja.contributed_by}
              </p>
            </div>
          </div>
        );
      })}
    </Main>
  );
}

export default AllBeers;
