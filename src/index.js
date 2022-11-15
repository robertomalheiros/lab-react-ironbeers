import React from "react";
import "./main/App.css";
import App from "./main/App";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      {" "}
      {/* Isso vai dizer ao nosso app, que estamos prontos para ter ROTAS */}
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
