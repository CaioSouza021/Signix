import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import LoginAprovado from "../LoginAprovado/LoginAprovado";
import "bootstrap-icons/font/bootstrap-icons.css";
import S from "./login.module.scss";

export default function Login() {
  //armazenar o nome de usuário, senha, visibilidade da senha e exibição da mensagem de sucesso
  const [username, setUsername] = useState(""); //Armazena o nome de usuário
  const [password, setPassword] = useState(""); // Armazena a senha
  const [showPassword, setShowPassword] = useState(false); //Controla se a senha será exibida ou não
  const [showSuccess, setShowSuccess] = useState(false); //Controla se a mensagem de sucesso será exibida
  const navigate = useNavigate();

  // Função para alternar a visibilidade da senha
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Verifica se os campos estão preenchidos
    if (username.trim() === "" || password.trim() === "") {
      alert("Preencha todos os campos.");
      return;
    }

    // Exibe a mensagem de sucesso
    setShowSuccess(true);

    setTimeout(() => {
      navigate("#");
    }, 3000);
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
              <i className="bi bi-envelope"></i>
              <input
                type="email"
                placeholder="E-mail"
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
          </div>

          <div className={S.senha}>
            <div className={S.boxForm}>
              <h3>Senha</h3>
              <div className={S.inputPrincipal}>
                <i className="bi bi-lock"></i>
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Senha"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <div className={S.olhoSenha} onClick={togglePasswordVisibility}>
                  <i
                    className={`bi ${showPassword ? "bi-eye-slash" : "bi-eye"}`}
                  ></i>
                </div>
              </div>
            </div>
          </div>

          <div className={S.boxLembrar}>
            <a href="#">Esqueceu a senha?</a>
          </div>

          <div className={S.Concluir}>
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

      {showSuccess && <LoginAprovado />}
    </div>
  );
}
