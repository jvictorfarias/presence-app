import React from "react";

import "./styles.css";

export default function Management() {
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

          <tr id="presentes">
            <td>JAMERSON ALVES AGUIAR DA SILVA</td>
            <td>418866</td>
            <td>8</td>
            <td>2</td>
          </tr>
        </table>

        <p>Presenças não confirmadas</p>
        <table>
          <thead>
            <th id="aluno">Aluno</th>
            <th id="matricula">Matrícula</th>
            <th id="presenças">Presenças</th>
            <th id="faltas">Faltas</th>
          </thead>
          <tr id="faltantes">
            <td>JOÃO VICTOR OLIVEIRA FARIAS</td>
            <td>418082</td>
            <td>6</td>
            <td>4</td>
          </tr>
        </table>

        <button className="btn" type="submit">
          GERAR PDF
        </button>
      </div>
    </>
  );
}
