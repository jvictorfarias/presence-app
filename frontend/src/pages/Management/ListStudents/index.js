import React, { useState, useEffect } from "react";

import api from "../../../services/api";

import "./styles.css";

export default function Management() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    async function loadStudents() {
      const tokenSession = localStorage.getItem("tokenSession");
      const response = await api.get("/students", {});
      setStudents(response.data);
    }
    loadStudents();
  });

  return (
    <>
      <div className="contentM">
        <p>Presenças confirmadas</p>
        <table>
          <thead>
            <th id="aluno">Aluno</th>
            <th id="matricula">Matrícula</th>
            <th id="presenças">Presenças</th>
            <th id="faltas">Faltas</th>
          </thead>

          {students.map(student => (
            <tr id="presentes">
              <td>{student.name}</td>
              <td>{student.matriculation}</td>
            </tr>
          ))}

          {/*
            <td>JAMERSON ALVES AGUIAR DA SILVA</td>
            <td>418866</td>
            <td>8</td>
            <td>2</td>
             */}
        </table>

        <p>Presenças não confirmadas</p>
        <table>
          <thead>
            <th id="aluno">Aluno</th>
            <th id="matricula">Matrícula</th>
            <th id="presenças">Presenças</th>
            <th id="faltas">Faltas</th>
          </thead>
          {students.map(student => (
            <tr id="faltantes">
              <td>{student.name}</td>
              <td>{student.matriculation}</td>
            </tr>
          ))}
        </table>

        <button className="btn" type="submit">
          GERAR PDF
        </button>
      </div>
    </>
  );
}
