import "./Main.css";
import React, { Fragment } from "react";
import Header from "./Header";

function Main(props) {
  return (
    <Fragment>
      <Header {...props} />
      <main className="content container-fluid">
        <div className="p-3 mt-3">{props.children}</div>
      </main>
    </Fragment>
  );
}

export default Main;
