import React from "react";
import style from "./HeaderBottom.module.scss";
import img from "../../../assets/Toggle.svg";

export const HeaderBottom = () => {
  return (
    <>
      <div className="container">
        <div className={style.block}>
          <div className={style.content}>
            <h3 className={style.title}>Display total price</h3>
            <p className={style.text}>Includes all fees, before taxes</p>
          </div>
          <img src={img} alt="#" />
        </div>
      </div>
    </>
  );
};
