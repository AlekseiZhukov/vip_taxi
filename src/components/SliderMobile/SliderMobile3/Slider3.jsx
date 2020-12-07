import React from 'react'
import style from "./Slider3.module.css";
import style2 from "../SliderMobile.module.css";


const Slider3 = () => {

	return (
		<div className={style.slider}>
			<div className={style.sliderTitleWrapper}>
				<h1 className={style.titleSlider}>курьерская доставка</h1>
			</div>
			<ul className={style.list}>
				<li>
					<span className={style.listMarkersColor}>
						быстрее и надежнее, чем экспресс — почтой
					</span>
				</li>
				<li>
					<span className={style.listMarkersColor}>
						гарантия сохранности груза
					</span>
				</li>
				<li>
					<span className={style.listMarkersColor}>
						индивидуальные услуги по доставке
					</span>
				</li>

				<li>
					<span className={style.listMarkersColor}>
						междугородняя и межобластная доставка
					</span>
				</li>


			</ul>
			<div className={style2.sliderBlackout}></div>
		</div>


	)
}

export default Slider3
