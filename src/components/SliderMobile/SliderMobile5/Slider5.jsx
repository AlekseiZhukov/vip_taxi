import React from 'react'
import style from "../SliderMobile5/Slider5.module.css";
import style2 from "../SliderMobile.module.css";


const Slider5 = () => {

	return (
		<div className={style.slider}>
			<div className={style.sliderTitleWrapper}>
				<h1 className={style.titleSlider}>встреча из роддома</h1>
			</div>
			<ul className={style.list}>
				<li>
					<span className={style.listMarkersColor}>
						достойная первая поездка Вашего малыша
					</span>
				</li>
				<li>
					<span className={style.listMarkersColor}>
						запоминающийся подарок
					</span>
				</li>
				<li>
					<span className={style.listMarkersColor}>красивый, чистый, дорогой, безопасный автомобиль</span>
				</li>

				<li>
					<span className={style.listMarkersColor}>
						тематическое украшение автомобиля
					</span>
				</li>


			</ul>
			<div className={style2.sliderBlackout}></div>
		</div>

	)
}

export default Slider5
