import "./Main.css";
import React from "react";
import Header from "./Header";

function Main(props) {
  return (
    <div className="elementos">
      <Header {...props} />
      <main className="content container-fluid">
        <div className="p-3 mt-3">{props.children}</div>
      </main>
    </div>
  );
}

export default Main;
