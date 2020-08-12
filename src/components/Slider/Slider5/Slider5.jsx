import React from 'react'
import '../Slider.css'
import Button from '../../Button/Button'

import styled, { keyframes } from 'styled-components'
import { fadeIn } from 'react-animations'
import Slide from 'react-reveal/Slide'
const FadeIn = styled.div`
	animation: 1s ${keyframes`${fadeIn}`};
`

const Slider5 = () => {
	return (
		<FadeIn>
			<div className=' slider5 slider'>
				<div className='sleder-blackout'></div>
				<div className='slider-wrapper'>
					<div className='slider-box'>
						<h1 className='slider-box-heder slider5-box-heder'>
							Встреча из роддома
						</h1>
						<Slide right cascade>
							<ul className='slider-list'>
								<li>
									<span className='slider-list_color'>
										достойная первая поездка Вашего малыша
									</span>
								</li>
								<li>
									<span className='slider-list_color'>
										запоминающийся подарок
									</span>
								</li>
								<li>
									<span className='slider-list_color'>
										красивый, чистый, дорогой, безопасный автомобиль
									</span>
								</li>
								<li>
									<span className='slider-list_color'>
										тематическое украшение автомобиля
									</span>
								</li>
							</ul>
						</Slide>
						<div className='slider-button'>
							<Button value='заказать такси' className='slider-button_style' />
						</div>
					</div>
				</div>
			</div>
		</FadeIn>
	)
}

export default Slider5
