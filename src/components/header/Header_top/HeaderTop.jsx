import React from "react";
import Icon from "../../../assets/icon.svg";
import style from "./Header_top.module.scss";
import { HeaderTopMid } from "./HeaderTopMid";
import { HeaderTopLast } from "./HeaderTopLast/HeaderTopLast";

export const HeaderTop = () => {
  return (
    <>
<div className="container">
    <div className={style.block}>


      <div className={style.block}>
        <img src={Icon} alt="#" />
      </div>
      <div>
        <HeaderTopMid />
      </div>
      <div>
        <HeaderTopLast />
      </div>
    </div>
    </div>
    <hr className={style.hr} />
    </>
  );
};
