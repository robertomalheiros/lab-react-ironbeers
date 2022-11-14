import "./Header.css";
import React from "react";

function Header(props) {
  return (
    <header className="header d-none d-sm-flex flex-column">
      <h1 className="mt-3"> Teste Cabeçalho</h1>
      <p className="lead text-muted">{props.subtitle}</p>
    </header>
  );
}

export default Header;
