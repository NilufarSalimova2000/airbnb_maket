import React from "react";
import style from "./HeaderTopLast.module.scss";
import world from "../../../../assets/Globe_icon.svg";
import darwer from "../../../../assets/drawer.svg";
import d from "../../../../assets/d.svg";

export const HeaderTopLast = () => {
  return (
    <>
      <div className={style.block}>
        <p className={style.text}>Airbnb your home</p>
        <div className={style.wrld}>

        <img className={style.img} src={world} alt="#" />
        </div>
        <div className={style.last_div}>
          <img src={darwer} alt="#" />
          <img src={d} alt="#" />
        </div>
      </div>
    </>
  );
};
