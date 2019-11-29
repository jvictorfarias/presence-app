import React, { useEffect, useState } from "react";

import "./styles.css";

import api from "../../services/api";

export default function Confirmation() {
  const [disciplines, setDisciplines] = useState([]);

  useEffect(() => {
    async function loadDisciplines() {
      const authorization = localStorage.getItem("tokenSession");
      const response = await api.get("/disciplines", {
        headers: authorization
      });
      setDisciplines(response.data);
    }

    loadDisciplines();
  }, []);

  return (
    <>
      <div className="contentC">
        <p>Disciplinas do Aluno</p>

        <ul className="class-list">
          {disciplines.map(discipline => (
            <li>
              <header>{discipline.name}</header>
              <strong>{discipline.cod}</strong>
              <span>{discipline.class_time}</span>
              <button className="btn" type="submit">
                CONFIRMAR PRESENÇA
              </button>
            </li>
          ))}

          {/*
          <li>
            <header>Redes de Comunicação Móveis</header>
            <strong>Sala 3 - Bloco 1</strong>
            <span>
              QUA - 20:00 às 22:00
              <br />
              SEX - 18:00 às 20:00
            </span>

            <button className="btn" type="submit">
              CONFIRMAR PRESENÇA
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

            <button className="btn" type="submit">
              CONFIRMAR PRESENÇA
            </button>
          </li>
          */}
        </ul>
      </div>
    </>
  );
}
