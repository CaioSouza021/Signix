import { useState } from "react";
import { Link } from "react-router-dom";
import S from "./Registro.module.scss";
import "bootstrap-icons/font/bootstrap-icons.css";
// biblioteca de calendario
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function Registro() {
  // utilizando a biblioteca de calendario
  const [birthdate, setBirthdate] = useState(null);

  // deixar a senha visivel:
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // monstrar a senha pelo icon
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };
  // confirmação de senha para que ambas sejam parecidas
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  false;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setPasswordError("As senhas não coincidem.");
    } else {
      setPasswordError("");
      alert("Conta criada com sucesso!");
    }
  };

  return (
    <div className={S.BoxConteudoRegistro}>
      <main className={S.formContainer}>
        <div className={S.formHeader}>
          <h1 className={S.formTitle}>Criar conta</h1>

          <button className={S.btnSair}>
            <Link to="/">
              <i class="bi bi-box-arrow-in-right"></i>{" "}
            </Link>
          </button>
        </div>

        <form
          action=""
          onSubmit={handleSubmit}
          className={S.FormularioRegistro}
        >
          <div className={S.inputContainer}>
            <div className={S.inputBox}>
              <label htmlFor="Name" className={S.formLabel}>
                Primeiro nome
              </label>
              <div className={S.inputField}>
                <input
                  type="text"
                  name="firstname"
                  id="firstname"
                  className={S.formControl}
                  placeholder=" insira o nome"
                  required
                />
                <i class="bi bi-person"></i>
              </div>
            </div>

            <div className={S.inputBox}>
              <label htmlFor="LastName" className={S.formLabel}>
                Sobrenome
              </label>
              <div className={S.inputField}>
                <input
                  type="text"
                  name="lastname"
                  id="lastname"
                  className={S.formControl}
                  placeholder=" insira o sobrenome"
                  required
                />
                <i class="bi bi-person"></i>
              </div>
            </div>

            <div className={S.inputBox}>
              <label htmlFor="birthdate" className={S.formLabel}>
                Nascimento
              </label>
              <div className={S.inputField}>
                <DatePicker
                  selected={birthdate}
                  onChange={(date) => setBirthdate(date)}
                  showYearPicker
                  dateFormat="dd/MM/yyyy"
                  className={S.formControl}
                />
              </div>
            </div>

            <div className={S.inputBox}>
              <label htmlFor="LastName" className={S.formLabel}>
                E-mail
              </label>
              <div className={S.inputField}>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className={S.formControl}
                  placeholder="exemplo@gmail.com"
                  required
                />
                <i class="bi bi-envelope"></i>
              </div>
            </div>

            <div className={S.inputBox}>
              <label htmlFor="password" className={S.formLabel}>
                Senha
              </label>
              <div className={S.inputField}>
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  id="password"
                  className={S.formControl}
                  placeholder="insira a senha"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <i
                  className={`bi ${showPassword ? "bi-eye" : "bi-eye-slash"}`}
                  style={{ cursor: "pointer" }}
                  onClick={togglePasswordVisibility}
                ></i>
              </div>
            </div>

            <div className={S.inputBox}>
              <label htmlFor="confirm_password" className={S.formLabel}>
                Confirmar senha
              </label>
              <div className={S.inputField}>
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  name="confirm_password"
                  id="confirm_password"
                  className={S.formControl}
                  placeholder="confirme a senha"
                  required
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
                <i
                  className={`bi ${
                    showConfirmPassword ? "bi-eye" : "bi-eye-slash"
                  }`}
                  style={{ cursor: "pointer" }}
                  onClick={toggleConfirmPasswordVisibility}
                ></i>
              </div>
            </div>

            {/* Mensagem de erro, se houver */}
            {passwordError && (
              <p
                style={{
                  color: "red",
                  marginTop: "-10px",
                  fontWeight: 700,
                }}
              >
                {passwordError}
              </p>
            )}

            <div className={S.radioContainer}>
              <label className={S.formLabel}>Gênero</label>
              <div className={S.teste1}>
                <div className={S.genderInputs}>
                  <div className={S.radioBox}>
                    <input
                      type="radio"
                      name="gender"
                      id="female"
                      className={S.formControl}
                      value="female"
                    />
                    <label htmlFor="female" className={S.formLabel}>
                      Feminino
                    </label>
                  </div>
                </div>

                <div className={S.genderInputs}>
                  <div className={S.radioBox}>
                    <input
                      type="radio"
                      name="gender"
                      id="male"
                      className={S.formControl}
                      value="male"
                    />
                    <label htmlFor="male" className={S.formLabel}>
                      Masculino
                    </label>
                  </div>
                </div>

                <div className={S.genderInputs}>
                  <div className={S.radioBox}>
                    <input
                      type="radio"
                      name="gender"
                      id="outher"
                      className={S.formControl}
                      value="outher"
                    />
                    <label htmlFor="female" className={S.formLabel}>
                      Outro
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button type="submit" className={S.btnDefault}>
            Criar conta
          </button>
        </form>
      </main>
    </div>
  );
}
