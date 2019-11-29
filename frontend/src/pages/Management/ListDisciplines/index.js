import React, { useEffect, useState } from "react";

import api from "../../../services/api";

import "./styles.css";

export default function Confirmation({ history }) {
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

  function handleClick(event) {
    event.preventDefault();
    history.push("/management/students");
  }

  return (
    <>
      <div className="contentC">
        <p>Disciplinas do Professor</p>

        <ul className="class-list">
          {disciplines.map(discipline => (
            <li>
              <header>{discipline.name}</header>
              <strong>{discipline.cod}</strong>
              <span>{discipline.class_time}</span>
              <button className="btn" type="submit" onClick={handleClick}>
                LISTA DE PRESENÇA
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
           */}
        </ul>
      </div>
    </>
  );
}
