import React from 'react'
import '../Slider.css'
import styled, { keyframes } from 'styled-components'
import { fadeIn } from 'react-animations'
import Slide from 'react-reveal/Slide'

const FadeIn = styled.div`animation: 1s ${keyframes`${fadeIn}`};`

const Slider2 = () => {

	return (
		<FadeIn>
			<div className=' slider2 slider'>
				<div className='sleder-blackout'></div>
				<div className='slider-wrapper'>
					<div className='slider-box'>
						<h1 className='slider-box-heder slider2-box-heder'>
							Трансфер аэропорт и ж/д вокзал
						</h1>
						<Slide right cascade>
							<ul className='slider-list'>
								<li>
									<span className='slider-list_color'>
										ожидание в аэропорту «Стригино» до 60 минут
									</span>
								</li>
								<li>
									<span className='slider-list_color'>
										ожидание на Ж/Д вокзале до 30 минут
									</span>
								</li>
								<li>
									<span className='slider-list_color'>встреча с табличкой</span>
								</li>

								<li>
									<span className='slider-list_color'>
										помощь в переносе багажа
									</span>
								</li>

								<li>
									<span className='slider-list_color'>
										доставка в любую точку Нижнего Новгорода
									</span>
								</li>
							</ul>
						</Slide>

					</div>
				</div>
			</div>
		</FadeIn>
	)
}

export default Slider2
