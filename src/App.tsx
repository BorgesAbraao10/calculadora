import { useState, FormEvent } from "react";
import "./App.css";

import logoImg from "./assets/logo-1.png";

// Calculo: alcool / gasolina
// E se o resultado for menor que 0.7 compensa usar alcool

function App() {
  const [gasolinaInput, setGasolinaInput] = useState(0);
  const [alcoolInput, setAlcoolInput] = useState(0);

  function calcular(event: FormEvent) {
    event.preventDefault();

    const calculo = alcoolInput / gasolinaInput;
    console.log(calculo);

    if (calculo <= 0.7) {
      alert("Compensa utilizar alcool");
    } else {
      alert("Compensa usar gasolina");
    }
  }
  return (
    <div>
      <main className="container">
        <img
          className="logo"
          src={logoImg}
          alt="Logo da imagem gasolina ou alcool"
        />

        <h1 className="title">Qual melhor opção?</h1>

        <form className="form" onSubmit={calcular}>
          <label>Álcool (preço por litro): </label>
          <input
            className="input"
            type="number"
            placeholder="2,60"
            min="1"
            step="0.01"
            required
            value={alcoolInput}
            onChange={(e) => setAlcoolInput(Number(e.target.value))}
          />

          <label>Gasolina (preço por litro): </label>
          <input
            className="input"
            type="number"
            placeholder="4,90"
            min="1"
            step="0.01"
            required
            value={gasolinaInput}
            onChange={(e) => setGasolinaInput(Number(e.target.value))}
          />

          <input className="button" type="submit" value="Calcular" />
        </form>

        <section className="result">
          <h2 className="result-title">Compensa usar alcool</h2>

          <span>Alcool R$ 4.30</span>
          <span>Gasolina R$ 5.10</span>
        </section>
      </main>
    </div>
  );
}

export default App;
