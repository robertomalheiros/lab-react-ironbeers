import "./Main.css";
import React from "react";
import Header from "./Header";

function Main(props) {
  return (
    <div className="elementos">
      <Header {...props} />
      <main>
        <div>{props.children}</div>
      </main>
    </div>
  );
}

export default Main;
