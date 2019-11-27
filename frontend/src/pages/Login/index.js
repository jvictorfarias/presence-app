import React, { useState } from "react";
import api from "../../services/api";

import "./styles.css";

export default function Login({ history }) {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
<<<<<<< HEAD
  const [type, setType] = useState(null);
=======
  const [type, setType] = useState("");
<<<<<<< HEAD
=======
  const [imei, setImei] = useState("");
>>>>>>> ba0156803ad9cef60a086dfe47f23e55a46ac9c8
>>>>>>> deb1063f30afe0c01a444b758461804d21d9d247
  const [captcha, setCaptcha] = useState("");
  const [captchaURL, setCaptchaURL] = useState(
    "https://academico.quixada.ufc.br/sippa/captcha.jpg"
  );

  async function handleSubmit(event) {
    event.preventDefault();
    if (id < 1 || !Number.isInteger(Number(id))) {
      window.alert(
        "ID inválido! use APENAS números inteiros e não deixe o campo em branco!."
      );
      return false;
    }
    if (password < 1) {
      window.alert("Senha em branco!");
      return false;
    }
    if (type === null) {
      window.alert("Selecione ALUNO ou PROFESSOR!");
      return false;
    } else {
      if (type === "professor") {
        await api
          .get("teachers")
          .then(() => {
            history.push("/management");
          })
          .catch(err => {
            alert(err);
          });
      } else {
        await api
          .get("/students")
          .then(() => {
            history.push("/confirmation");
          })
          .catch(alert("error"));
      }
    }
    // const response = await api.ROTADELOGIN('/ROTADELOGIN', { id, password, type })
    // função deve ser async
  }

  return (
    <>
      <div className="contentL">
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

          <div className="captchaDiv">
            <input
              id="captchaInput"
              placeholder="Captcha"
              value={captcha}
              onChange={event => setCaptcha(event.target.value)}
            />
            <img
              id="captchaImage"
              src={captchaURL}
              alt=""
              width={90}
              onClick={event => setCaptchaURL("")}
              onMouseLeave={event =>
                setCaptchaURL(
                  "https://academico.quixada.ufc.br/sippa/captcha.jpg"
                )
              }
            />
          </div>

          <button className="btn" type="submit">
            ENTRAR
          </button>
        </form>
      </div>
    </>
  );
}
