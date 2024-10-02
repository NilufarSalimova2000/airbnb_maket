import React from "react";
import style from "./headerService.module.scss"

export const HeaderService = ({ img, title }) => {
    return (
      <>
        <div className={style.block}>
          <img src={img} alt="#" />
          <h3 className={style.title}>{title}</h3>
        </div>
      </>
    );
  };