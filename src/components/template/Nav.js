import "./Nav.css";
import React from "react";
import { Link } from "react-router-dom";

function Nav(props) {
  return (
    <aside className="menuArea">
      <nav className="menu">
        {/* Refatorar em casa! */}
        <Link to="/beers">
          <i className="beers"></i> Beers
        </Link>
        <Link to="/random-beer">
          <i className="randomBeer"></i> Random Beer
        </Link>
        <Link to="/new-beer">
          <i className="newBeer"></i> New Beer
        </Link>
      </nav>
    </aside>
  );
}

export default Nav;
