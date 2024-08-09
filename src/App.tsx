import { useState } from "react";
import "./App.css";

import logoImg from "./assets/logo-1.png";

function App() {
  return (
    <div>
      <main className="container">
        <img
          className="logo"
          src={logoImg}
          alt="Logo da imagem gasolina ou alcool"
        />

        <h1 className="title">Qual melhor opção?</h1>
        <form className="form">
          <label>Álcool (preço por litro): </label>
          <input
            className="input"
            type="number"
            placeholder="2,60"
            min="1"
            step="0.01"
            required
          />

          <label>Gasolina (preço por litro): </label>
          <input
            className="input"
            type="number"
            placeholder="4,90"
            min="1"
            step="0.01"
            required
          />

          <input className="button" type="submit" value="Calcular" />
        </form>
      </main>
    </div>
  );
}

export default App;
