import { useState } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";

import { Link } from "react-router-dom";
import "./login.module.scss";
import S from "./login.module.scss";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Dados enviados: " + username + " - " + password);
  };

  return (
    <div className={S.container}>
      <div className={S.boxConteudo}>
        <form onSubmit={handleSubmit}>
          <div className={S.titulo}>
            <h1>SIGNIX</h1>
          </div>

          <div className={S.boxForm}>
            <h3>Email</h3>
            <div className={S.inputPrincipal1}>
              <i class="bi bi-envelope"></i>
              <input
                type="email"
                placeholder="E-mail"
                required
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
          </div>

          <div className={S.senha}>
            <div className={S.boxForm}>
              <h3>Senha</h3>
              <div className={S.inputPrincipal}>
                <i class="bi bi-lock"></i>
                <input
                  type="password"
                  placeholder="Senha"
                  required
                  onChange={(e) => setPassword(e.target.value)}
                />

                <div className={S.olhoSenha}>
                  <i class="bi bi-eye"></i>
                </div>
                <div className={S.olhoSemSenha}>
                  <i class="bi bi-eye-slash"></i>
                </div>
              </div>
            </div>
          </div>

          <div className={S.boxLembrar}>
            <a href="#">Esqueceu a senha?</a>
          </div>

          <div className={S.Concluir}>
            {/* <nav>
              <Link to="/">Login</Link>
              <Link to="Registro">Registro</Link>
            </nav> */}
            <ul>
              <li className={S.btnEntrar}>
                <button className={S.entrar} type="submit">
                  Entrar
                </button>
              </li>
              <li className={S.btnCriar}>
                <button className={S.criar} type="button">
                  <Link to="Registro" className={S.link}>
                    Criar conta
                  </Link>
                </button>
              </li>
            </ul>
          </div>
        </form>
      </div>
    </div>
  );
}
