import React from 'react'
import '../Slider.css'

import styled, { keyframes } from 'styled-components'
import { fadeIn } from 'react-animations'

const FadeIn = styled.div`
	animation: 1s ${keyframes`${fadeIn}`};
`

const Slider5 = () => {
	return (
		<FadeIn>
			<div className=' slider5 slider'>
				<div className='slider-wrapper'>
					<div className='slider-box'>
						<h1 className='slider-box-heder'>
							VIP TAXI<br></br> такси для людей
						</h1>
						<div></div>
						<h2>Стандартная услуга включает:</h2>
						<h3>1й вариант:</h3>
						<ul>
							<li>
								ожидание в аэропорту «Стригино» г. Н. Новгород до 60 минут,
								ожидание на Ж/Д вокзале до 30 минут
							</li>
							<li>
								встреча с табличкой у вагона (сообщить оператору при заказе)
							</li>
							<li>помощь в переноске багажа</li>
							<li>доставка в любую точку Нижнего Новгорода</li>
						</ul>
						<h3>2й вариант:</h3>
						<ul>
							<li>ожидание в городе до 30 минут</li>
							<li>
								доставка в аэропорт «Стригино» г. Н. Новгород или Ж\Д вокзал
							</li>
							<li>помощь в переноске багажа</li>
						</ul>
						<p>
							Cтоимость услуги: бизнес класс аэропорт/ЖД вокзал1300 — 1300/700
							рублей, остальной транспорт — уточните у оператора.
						</p>
					</div>
				</div>
			</div>
		</FadeIn>
	)
}

export default Slider5
