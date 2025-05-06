import React from "react";
import S from "./Loading.module.scss";

export default function Loading() {
  return (
    <div className={S.loadingContainer}>
      <div className={S.spinner}></div>
    </div>
  );
}
