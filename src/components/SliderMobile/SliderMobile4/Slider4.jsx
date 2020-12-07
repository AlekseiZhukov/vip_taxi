import React from 'react'
import style from "../SliderMobile4/Slider4.module.css";
import style2 from "../SliderMobile.module.css";


const Slider4 = () => {

	return (
		<div className={style.slider}>
			<div className={style.sliderTitleWrapper}>
				<h1 className={style.titleSlider}>будильник</h1>
			</div>
			<ul className={style.list}>
				<li>
					<span className={style.listMarkersColor}>
						Вы не проспите на встречу
					</span>
				</li>
				<li>
					<span className={style.listMarkersColor}>
						Вы не опоздаете на самолет или поезд
					</span>
				</li>
				<li>
					<span className={style.listMarkersColor}>Вы сохраните свой ритм жизни</span>
				</li>

				<li>
					<span className={style.listMarkersColor}>
						Вы не переплатите за простой такси
					</span>
				</li>

				<li>
					<span className={style.listMarkersColor}>
						с нашим такси предоставляется бесплатно
					</span>
				</li>
			</ul>
			<div className={style2.sliderBlackout}></div>
		</div>

	)
}

export default Slider4
