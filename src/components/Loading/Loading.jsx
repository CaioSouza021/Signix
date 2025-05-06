import React from "react";
import S from "./Loading.module.scss";

export default function Loading() {
  const Loading = () => (
    <div className={S.loadingContainer}>
      <div className={S.spinner}></div>
    </div>
  );
}
