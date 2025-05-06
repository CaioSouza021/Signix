import React from "react";
import S from "./Loading.module.scss";

export default function Loading() {
  return (
    <div className={S.starsWrapper}>
      <div className={S.shootingStar}></div>
      <div className={S.shootingStarDelay1}></div>
      <div className={S.shootingStarDelay2}></div>
      <div className={S.shootingStarDelay3}></div>
    </div>
  );
}
