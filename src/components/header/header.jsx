import React from "react";
import { HeaderTop } from "./Header_top";
import { HeaderService } from "./headerService";
import { service } from "../../Data/data";
import style from "./header.module.scss";
import { HeaderBottom } from "./HeaderBottom";

export const Header = () => {
  return (
    <>
      <HeaderTop />
      <div className="container">
        <div className={style.block}>
          {service.map((item) => (
            <HeaderService key={item.id} img={item.img} title={item.title} />
          ))}
        </div>
      </div>
      <HeaderBottom />
    </>
  );
};