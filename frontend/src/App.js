import React, { useState } from "react";
import api from "./services/api";
import "./App.css";
import logo from "./assets/logo.svg";

function App() {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [type, setType] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    if (id < 1 || !Number.isInteger(Number(id))) {
      window.alert("ID inválido! use APENAS números inteiros.");
    }
    if (password < 1) {
      window.alert("Senha em branco!");
    }
    if (type < 1) {
      window.alert("Selecione ALUNO ou PROFESSOR");
    }
  }

  return (
    <div className="container">
      <img src={logo} alt="Presence!" />

      <div className="content">
        <p>
          <strong>Gerencie</strong> suas presenças com o{" "}
          <strong>Presence!</strong>
        </p>

        <form onSubmit={handleSubmit}>
          <label htmlFor="text">Identificação</label>
          <input
            autoFocus
            type="number"
            id="id"
            placeholder="Matrícula/SIAPE"
            value={id}
            onChange={event => setId(event.target.value)}
          />

          <label htmlFor="text">Senha</label>
          <input
            type="password"
            id="password"
            placeholder="Senha"
            value={password}
            onChange={event => setPassword(event.target.value)}
          />

          <label htmlFor="text">Tipo de Conta</label>
          <select
            name="tipo"
            id="type"
            onChange={event => setType(event.target.value)}
          >
            <option disabled selected value>
              Aluno / Professor
            </option>
            <option value="aluno">Aluno</option>
            <option value="professor">Professor</option>
          </select>

          <button className="btn" type="submit">
            ENTRAR
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
