import React from "react";

import Irandombeer from "../../assets/imgs/random-beer.png";
import Main from "../template/Main";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function RandomBeer() {
  const [cervejas, setcervejas] = useState([]);
  const [reload] = useState(false);

  useEffect(() => {
    async function fetchStudents() {
      const response = await axios.get("https://ironbeer-api.fly.dev/random");
      setcervejas(response.data);
    }

    fetchStudents();
  }, [reload]);

  return (
    <Main className="MainAll">
      <div className="ImgLogo">
        <img src={Irandombeer} alt="logo" />
      </div>
      <div className="cerveja" key={cervejas._id}>
        <div>
          <Link to={`/detalhes-beer/${cervejas._id}`}>
            <img className="imgCervejas" src={cervejas.image} alt="logo" />
          </Link>
        </div>
        <div className="AllBeersText">
          <h4>{cervejas.nome}</h4>
          <p>{cervejas.tagline}</p>
          <p>
            <bold> Created by:</bold> {cervejas.contributed_by}
          </p>
        </div>
      </div>
    </Main>
  );
}

export default RandomBeer;
