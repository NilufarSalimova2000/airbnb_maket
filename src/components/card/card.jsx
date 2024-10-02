import React from "react";
import style from "../card/card.module.scss";

export const Card = ({ img, title, star, cost, description, time, price, night }) => {
    return (
        <>
            <div className="container">
                <div className={style.item}>
                    <div className={style.img_block}>
                        <img src={img} alt="imag" />
                    </div>
                    <div className={style.title_block}>
                        <h2 className={style.title}>{title}</h2>
                        <div className={style.cost_block}>
                            <img src={star} alt="icon" />
                            <p className={style.cost}>{cost}</p>
                        </div>
                    </div>
                    <p className={style.des}>{description}</p>
                    <p className={style.time}>{time}</p>
                    <div className={style.price_block}>
                        <p className={style.price}>{price}</p>
                        <p className={style.info}>{night}</p>
                    </div>
                </div>
            </div>
        </>
    )
}