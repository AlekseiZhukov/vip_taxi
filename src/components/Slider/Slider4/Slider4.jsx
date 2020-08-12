import React from 'react'
import '../Slider.css'
import Button from '../../Button/Button'

import styled, { keyframes } from 'styled-components'
import { fadeIn } from 'react-animations'
import Slide from 'react-reveal/Slide'
const FadeIn = styled.div`
	animation: 1s ${keyframes`${fadeIn}`};
`

const Slider4 = () => {
	return (
		<FadeIn>
			<div className=' slider slider4'>
				<div className='sleder-blackout'></div>
				<div className='slider-wrapper'>
					<div className='slider-box'>
						<h1 className='slider-box-heder slider4-box-heder'>Будильник</h1>
						<Slide right cascade>
							<ul className='slider-list'>
								<li>
									<span className='slider-list_color'>
										Вы не проспите на встречу
									</span>
								</li>
								<li>
									<span className='slider-list_color'>
										Вы не опоздаете на самолет или поезд
									</span>
								</li>
								<li>
									<span className='slider-list_color'>
										Вы сохраните свой ритм жизни
									</span>
								</li>
								<li>
									<span className='slider-list_color'>
										Вы не переплатите за простой такси
									</span>
								</li>
								<li>
									<span className='slider-list_color'>
										с нашим такси предоставляется бесплатно
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

export default Slider4
