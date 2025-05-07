import { useState } from "react";
import S from "./Registro.module.scss";
import "bootstrap-icons/font/bootstrap-icons.css";

// Registro.jsx
export default function Registro() {
  return (
    <div className={S.BoxConteudo}>
      <main className={S.formContainer}>
        <div className={S.formHeader}>
          <h1 className={S.formTitle}>Criar conta</h1>
          <button className={S.btnSair}>
            <i class="bi bi-box-arrow-in-right"></i>
          </button>
        </div>

        <form action="">
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
                />
                <i class="bi bi-person"></i>
              </div>
            </div>

            <div className={S.inputBox}>
              <label htmlFor="birthdate" className={S.formLabel}>
                Nascimento
              </label>
              <div className={S.inputField}>
                <input
                  type="date"
                  name="birthdate"
                  id="birthdate"
                  className={S.formControl}
                  placeholder=" insira o sobrenome"
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
                  type="password"
                  name="password"
                  id="password"
                  className={S.formControl}
                  placeholder="insira a senha"
                />
                <i class="bi bi-eye-slash"></i>
              </div>
            </div>

            <div className={S.inputBox}>
              <label htmlFor="confirm_password" className={S.formLabel}>
                Confirmar senha
              </label>
              <div className={S.inputField}>
                <input
                  type="password"
                  name="confirm_password"
                  id="confirm_password"
                  className={S.formControl}
                  placeholder="confirme a senha"
                />
                <i class="bi bi-eye-slash"></i>
              </div>
            </div>

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
