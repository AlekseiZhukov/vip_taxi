import React from 'react'
import '../Slider.css'
import Button from '../../Button/Button'

import styled, { keyframes } from 'styled-components'
import { fadeIn } from 'react-animations'
import Slide from 'react-reveal/Slide'
const FadeIn = styled.div`
	animation: 1s ${keyframes`${fadeIn}`};
`

const Slider3 = () => {
	return (
		<FadeIn>
			<div className=' slider slider3'>
				<div className='sleder-blackout'></div>
				<div className='slider-wrapper'>
					<div className='slider-box'>
						<h1 className='slider-box-heder slider3-box-heder'>
							Курьерская доставка
						</h1>
						<Slide right cascade>
							<ul className='slider-list'>
								<li>
									<span className='slider-list_color'>
										быстрее и надежнее, чем экспресс — почтой
									</span>
								</li>
								<li>
									<span className='slider-list_color'>
										гарантия сохранности груза
									</span>
								</li>
								<li>
									<span className='slider-list_color'>
										индивидуальные услуги по доставке
									</span>
								</li>
								<li>
									<span className='slider-list_color'>
										междугородняя и межобластная доставка
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

export default Slider3
