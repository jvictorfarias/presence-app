import React from "react";
import "./App.css";
import logo from "./assets/logo.svg";

function App() {
  return (
    <div className="container">
      <img src={logo} alt="Presence!" />
      <div className="content">
        <p>
          <strong>Gerencie</strong> suas presenças com o{" "}
          <strong>Presence!</strong>
        </p>

        <form>
          <label htmlFor="text">Identificação</label>
          <input type="text" id="matr_siape" placeholder="Matrícula/SIAPE" />

          <div className="form-check">
            <label>
              <input
                type="radio"
                name="option1"
                value="aluno"
                checked={true}
                className="form-check-input"
              />
              Aluno
            </label>

            <label>
              <input
                type="radio"
                name="option2"
                value="professor"
                checked={false}
                className="form-check-input"
              />
              Professor
            </label>
          </div>

          <label htmlFor="text">Senha</label>
          <input type="password" id="password" placeholder="Senha" />

          <button className="btn" type="submit">
            ENTRAR
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
