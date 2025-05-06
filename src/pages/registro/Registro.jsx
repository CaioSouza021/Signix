import { useState } from "react";
import S from "./Registro.module.scss";

// Registro.jsx
export default function Registro() {
  return (
    <div className={S.boxForm}>
      <h3>Email</h3>
      <div className={S.inputPrincipal}>
        <i class="bi bi-envelope"></i>
        <input
          type="email"
          placeholder="E-mail"
          required
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
    </div>
  );
}
