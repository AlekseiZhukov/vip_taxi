import React from 'react'
import style from "./Slider1.module.css";
import style2 from "../SliderMobile.module.css";

const Slider1 = () => {
	return (
		<div className={style.slider}>

			<div className={style.sliderTitleWrapper}>
				<h1 className={style.titleSlider}>бизнесс-класс для людей</h1>
			</div>
			<ul className={style.list}>
				<li>
						<span className={style.listMarkersColor}>
							престижные автомобили бизнес-класса<br/>
										лишенные внешних атрибутов такси
						</span>
				</li>
				<li>
						<span className={style.listMarkersColor}>
							вежливые и культурные водители<br/>с лицензией на право
										перевозки пассажиров
						</span>
				</li>
				<li>
					<span className={style.listMarkersColor}>наличный и безналичный расчет</span>
				</li>

				<li>
					<span className={style.listMarkersColor}>
						прохладительные напитки, Wi-Fi и музыка<br/>в
						соответствии с Вашими предпочтениями
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

export default Slider1
