import S from "./LoginAprovado.module.scss";
import React from "react";

export default function LoginAprovado() {
  return (
    <div className={S.loginSuccess}>
      <div className={S.planetWrapper}>
        <div className={S.planet}></div>
        <div className={S.ring}></div>
      </div>
      <h2>Acesso Liberado</h2>
    </div>
  );
}
