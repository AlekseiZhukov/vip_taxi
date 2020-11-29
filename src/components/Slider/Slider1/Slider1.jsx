import React from 'react'
import '../Slider.css'

import styled, { keyframes } from 'styled-components'
import { fadeIn } from 'react-animations'

import Slide from 'react-reveal/Slide'

const FadeIn = styled.div`animation: 1s ${keyframes`${fadeIn}`};`

const Slider1 = () => {

	return (
		<FadeIn>
			<div className=' slider1 slider'>
				<div className='sleder-blackout'></div>
				<div className='slider-wrapper'>
					<div className='slider-box'>
						<h1 className='slider-box-heder slider1-box-heder '>
							бизнесс-класс для людей
						</h1>
						<Slide right cascade>
							<ul className='slider-list'>
								<li>
									<span className='slider-list_color'>
										престижные автомобили бизнес-класса<br></br>
										лишенные внешних атрибутов такси
									</span>
								</li>

								<li>
									<span className='slider-list_color'>
										вежливые и культурные водители<br></br>с лицензией на право
										перевозки пассажиров
									</span>
								</li>
								<li>
									<span className='slider-list_color'>
										наличный и безналичный расчет
									</span>
								</li>

								<li>
									<span className='slider-list_color'>
										прохладительные напитки, Wi-Fi и музыка<br></br>в
										соответствии с Вашими предпочтениями
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

export default Slider1
