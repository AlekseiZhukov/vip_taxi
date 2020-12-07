import React from 'react'
import style from './Slider2.module.css'
import style2 from "../SliderMobile.module.css";

const Slider2 = () => {

    return (

        <div className={style.slider}>
            <div className={style.sliderTitleWrapper}>
                <h1 className={style.titleSlider}>трансфер аэропорт и ж/д вокзал</h1>
            </div>
            <ul className={style.list}>
                <li>
					<span className={style.listMarkersColor}>
						ожидание в аэропорту «Стригино» до 60 минут
					</span>
                </li>
                <li>
					<span className={style.listMarkersColor}>
						ожидание на Ж/Д вокзале до 30 минут
					</span>
                </li>
                <li>
                    <span className={style.listMarkersColor}>встреча с табличкой</span>
                </li>

                <li>
					<span className={style.listMarkersColor}>
						помощь в переносе багажа
					</span>
                </li>

                <li>
					<span className={style.listMarkersColor}>
						доставка в любую точку Нижнего Новгорода
					</span>
                </li>
            </ul>
            <div className={style2.sliderBlackout}></div>
        </div>

    )
}

export default Slider2
