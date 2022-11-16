import React from "react";
import Inewbeers from "../../assets/imgs/new-beer.png";
import Main from "../template/Main";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

function NewBeer() {
  const [showForm, setShowForm] = useState(false);

  const [beers, setbeers] = useState([]);
  const [reload, setReload] = useState(false);
  const [form, setForm] = useState({
    name: "",
    image: "",
    tagline: "",
    contributed_by: "",
    attenuation_level: "",
    description: "",
    first_brewed: "",
    brewers_tips: "",
  });

  useEffect(() => {
    async function fetchBeers() {
      const response = await axios.get("https://ironbeer-api.fly.dev/");
      setbeers(response.data);
    }

    fetchBeers();
  }, [reload]);

  function handleReload() {
    setReload(!reload);
  }

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    console.log(form);

    await axios.post("https://ironbeer-api.fly.dev/new", form);
    setForm({
      name: "",
      image: "",
      tagline: "",
      contributed_by: "",
      attenuation_level: "",
      description: "",
      first_brewed: "",
      brewers_tips: "",
    });
    handleReload();
    toast.success("cerveja criado com sucesso! :D");
    setShowForm(false);
  }

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
      <div>
        <button
          onClick={() => {
            setShowForm(!showForm);
          }}
        >
          Nova Cerveja
        </button>

        {showForm === true && (
          <form className="EditarDadosBeer">
            <div className="DivForm">
              <label>Nome: </label>
              <input
                type="text"
                onChange={handleChange}
                name="name"
                value={form.name}
              />
            </div>

            <div>
              <label>Img: </label>
              <input
                type="text"
                onChange={handleChange}
                name="image"
                value={form.image}
              />
            </div>

            <div>
              <label>Marca: </label>
              <input
                type="text"
                onChange={handleChange}
                name="tagline"
                value={form.tagline}
              />
            </div>
            <div>
              <label>Descrição: </label>
              <input
                type="text"
                onChange={handleChange}
                name="description"
                value={form.description}
              />
            </div>
            <div>
              <label>Ano de Fabricação: </label>
              <input
                type="text"
                onChange={handleChange}
                name="first_brewed"
                value={form.first_brewed}
              />
            </div>
            <div>
              <label>Fabricante: </label>
              <input
                type="text"
                onChange={handleChange}
                name="contributed_by"
                value={form.contributed_by}
              />
            </div>

            <div>
              <label>attenuation_level</label>
              <input
                type="text"
                onChange={handleChange}
                name="attenuation_level"
                value={form.attenuation_level}
              />
            </div>

            <button onClick={handleSubmit}>Salvar cerveja</button>
          </form>
        )}

        {beers.map((cerveja) => {
          return (
            <div className="cerveja" key={cerveja._id}>
              <div>
                <Link to={`/detalhes-beer/${cerveja._id}`}>
                  <img className="imgCervejas" src={cerveja.image} alt="logo" />
                </Link>
              </div>
              <div className="AllBeersText">
                <h4>{cerveja.nome}</h4>
                <p>{cerveja.tagline}</p>
                <p>
                  <bold> Created by:</bold> {cerveja.contributed_by}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </Main>
  );
}

export default NewBeer;
