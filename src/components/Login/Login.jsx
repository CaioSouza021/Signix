import "bootstrap-icons/font/bootstrap-icons.css";
import { useState } from "react";
import "./login.module.scss";
import S from "./login.module.scss";

export default function login() {
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
          <h1>acesse o sistema</h1>
          <div className={S.inputPrincipal}>
            <input
              type="email"
              placeholder="E-mail"
              required
              onChange={(e) => setUsername(e.target.value)}
            />
            <i class="bi bi-person-circle"></i>
          </div>
          <div className={S.inputPrincipal}>
            <input
              type="password"
              placeholder="Senha"
              required
              onChange={(e) => setPassword(e.target.value)}
            />
            <i class="bi bi-lock-fill"></i>
          </div>

          <div class="box-lembrar">
            <label>
              <input type="checkbox" />
              Lembre de mim
            </label>
            <a href="#">Esqueceu a senha?</a>
          </div>
          <div className="box-registro">
            <p>
              Não possui uma conta? <a href="#">Registrar</a>
            </p>
          </div>
          <button>Entrar</button>
        </form>
      </div>
    </div>
  );
}
