import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import React from "react";
import Logo from "../components/template/Logo";
import Nav from "../components/template/Nav";
import Rotas from "./Rotas";
import Footer from "../components/template/Footer";

function App() {
  return (
    <div className="App">
      <Logo />
      <Nav />
      <Rotas />
      <Footer />
    </div>
  );
}

export default App;
