import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

function BeerDetalhes() {
  const { beerID } = useParams();
  const navigate = useNavigate();

  const [showForm, setShowForm] = useState(false);

  const [reload, setReload] = useState(false);
  const [beer, setbeer] = useState({});
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
    async function fetchUser() {
      const response = await axios.get(
        `https://ironbeer-api.fly.dev/${beerID}`
      );
      setbeer(response.data);
      //preenchendo o form com as informações existentes
      setForm(response.data);
    }

    fetchUser();
  }, [reload]);

  async function handleDelete(e) {
    await axios.delete(`https://ironrest.herokuapp.com/enap-teste/${beerID}`);
    navigate("/api-teste");
  }

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      //clonar o state para um obj JS
      const clone = { ...form };
      //deletar a chave _id do obj
      delete clone._id;

      await axios.put(
        `https://ironrest.herokuapp.com/enap-teste/${beerID}`,
        clone
      );
      setReload(!reload);
      setShowForm(false);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="DivDetalhes">
      <img className="imgCervejas" src={beer.image} alt="logo" />

      {!showForm && (
        <div className="DadosBeer">
          <p>{beer.name}</p>
          <p>Fabricante: {beer.contributed_by}</p>
          <p>attenuation_level: {beer.attenuation_level}</p>
          <p>
            {beer.tagline} - {beer.description}
          </p>
          <p>first_brewed: {beer.first_brewed}</p>
        </div>
      )}

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

          <button onClick={handleSubmit}>Salvar beer</button>
        </form>
      )}
      <div className="Botoes">
        <button
          onClick={() => {
            setShowForm(!showForm);
            setReload(!reload);
          }}
        >
          Editar Cerveja!
        </button>
        {"           "}
        <button onClick={handleDelete}>Deletar usuário!</button>
      </div>
    </div>
  );
}

export default BeerDetalhes;
