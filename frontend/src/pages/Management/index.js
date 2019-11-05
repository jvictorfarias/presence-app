import React from "react";

import api from "../../services/api";

import "./styles.css";

export default function Management() {
  return (
    <>
      <div className="contentM">
        <p>Presenças confirmadas</p>
        <table>
          <thead>
            <tr>
              <th>Aluno</th>
              <th>Matrícula</th>
              <th>Presenças</th>
              <th>Faltas</th>
            </tr>
          </thead>
        </table>

        <p>Presenças não confirmadas</p>
        <table>
          <thead>
            <tr>
              <th>Aluno</th>
              <th>Matrícula</th>
              <th>Presenças</th>
              <th>Faltas</th>
            </tr>
          </thead>
        </table>

        <button className="btn" type="submit">
          GERAR PDF
        </button>
      </div>
    </>
  );
}
