import React from "react";
import style from "./HeaderTopMid.module.scss";
import search from "../../../../assets/search.svg";

export const HeaderTopMid = () => {
  return (
    <>
      <div className={style.block}>
        <p className={style.text}>Anywhere</p>
        <p className={style.text1}>Any week</p>
        <div className={style.searchDiv}>
          <p className={style.text2}>Add guests</p>
          <img src={search} alt="#" />
        </div>
      </div>
    </>
  );
};
