import React from "react";

import "./styles.css";

export default function Confirmation({ history }) {
  function handleClick(event) {
    event.preventDefault();
    history.push("/management/students");
  }

  return (
    <>
      <div className="contentC">
        <p>Disciplinas do Professor</p>

        <ul className="class-list">
          <li>
            <header>Redes de Comunicação Móveis</header>
            <strong>Sala 3 - Bloco 1</strong>
            <span>
              QUA - 20:00 às 22:00
              <br />
              SEX - 18:00 às 20:00
            </span>

            <button className="btn" type="button" onClick={handleClick}>
              LISTA DE PRESENÇA
            </button>
          </li>

          <li>
            <header>Sistemas Distribuídos</header>
            <strong>Sala 3 - Bloco 1</strong>
            <span>
              SEG - 20:00 às 22:00
              <br />
              TER - 20:00 às 22:00
            </span>

            <button className="btn" type="button" onClick={handleClick}>
              LISTA DE PRESENÇA
            </button>
          </li>
        </ul>
      </div>
    </>
  );
}
