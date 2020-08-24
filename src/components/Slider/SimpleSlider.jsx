import React from 'react'

import './SimpleSlider.css'

import icon1_o from '../../SliderImages/bizness-O.svg'
import icon1_w from '../../SliderImages/bizness-W.svg'

import icon2_o from '../../SliderImages/transfer-O.svg'
import icon2_w from '../../SliderImages/transfer-W.svg'

import icon3_o from '../../SliderImages/box-O.svg'
import icon3_w from '../../SliderImages/box-W.svg'

import icon4_o from '../../SliderImages/clock-O.svg'
import icon4_w from '../../SliderImages/clock-W.svg'

import icon5_o from '../../SliderImages/baby-O.svg'
import icon5_w from '../../SliderImages/baby-W.svg'

import Slider1 from './Slider1/Slider1'
import Slider2 from './Slider2/Slider2'
import Slider3 from './Slider3/Slider3'
import Slider4 from './Slider4/Slider4'
import Slider5 from './Slider5/Slider5'

class SimpleSlider extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			slide: 'slider1',
			mouseOver: '',
		}
	}

	onClickDiv = (event) => {
		const id = event.target.id

		if (id === 'slider1') {
		}
		if (id === 'slider2') {
		}
		if (id === 'slider3') {
		}
		if (id === 'slider4') {
		}
		if (id === 'slider5') {
		}

		this.setState({
			slide: id,
		})
	}

	hendleMouseOver = (event) => {
		const id = event.target.id
		this.setState({
			mouseOver: id,
		})
	}

	hendleMouseOut = () => {
		this.setState({
			mouseOver: '',
		})
	}

	render() {
		const { slide, mouseOver } = this.state
		let sl
		if (slide === 'slider1') {
			sl = <Slider1 />
		}
		if (slide === 'slider2') {
			sl = <Slider2 />
		}
		if (slide === 'slider3') {
			sl = <Slider3 />
		}
		if (slide === 'slider4') {
			sl = <Slider4 />
		}
		if (slide === 'slider5') {
			sl = <Slider5 />
		}

		return (
			<div className='section1'>
				<div className='section1-container'>{sl}</div>

				<div className='section1-sliderIcons'>
					<div className='section1-sliderIcons-wrapper'>
						<div
							onClick={this.onClickDiv}
							onMouseOver={this.hendleMouseOver}
							onMouseOut={this.hendleMouseOut}
							id='slider1'
							className='section1-sliderIcons-wrapper_icon'
						>
							<img
								id='slider1'
								src={
									mouseOver === 'slider1' || slide === 'slider1'
										? icon1_w
										: icon1_o
								}
								className='section1-sliderIcons_size'
								alt='слайд1'
							/>

							<div
								id='slider1'
								className={`section1-sliderIcons_txt_wrapper ${
									slide === 'slider1'
										? 'section1-sliderIcons_txt_wrapper-wite'
										: null
								}`}
							>
								Такси<br></br>бизнесс-класса
							</div>
						</div>
						<div
							onClick={this.onClickDiv}
							onMouseOver={this.hendleMouseOver}
							onMouseOut={this.hendleMouseOut}
							id='slider2'
							className='section1-sliderIcons-wrapper_icon'
						>
							<img
								id='slider2'
								src={
									mouseOver === 'slider2' || slide === 'slider2'
										? icon2_w
										: icon2_o
								}
								className='section1-sliderIcons_size'
								alt='слайд2'
							/>

							<div
								id='slider2'
								className={`section1-sliderIcons_txt_wrapper ${
									slide === 'slider2'
										? 'section1-sliderIcons_txt_wrapper-wite'
										: null
								}`}
							>
								Трансфер аэропорт <br></br>или Ж/Д вокзал
							</div>
						</div>
						<div
							onClick={this.onClickDiv}
							onMouseOver={this.hendleMouseOver}
							onMouseOut={this.hendleMouseOut}
							id='slider3'
							className='section1-sliderIcons-wrapper_icon'
						>
							<img
								id='slider3'
								src={
									mouseOver === 'slider3' || slide === 'slider3'
										? icon3_w
										: icon3_o
								}
								className='section1-sliderIcons_size'
								alt='слайд3'
							/>

							<div
								id='slider3'
								className={`section1-sliderIcons_txt_wrapper ${
									slide === 'slider3'
										? 'section1-sliderIcons_txt_wrapper-wite'
										: null
								}`}
							>
								Курьерская доставка
							</div>
						</div>
						<div
							onClick={this.onClickDiv}
							onMouseOver={this.hendleMouseOver}
							onMouseOut={this.hendleMouseOut}
							id='slider4'
							className='section1-sliderIcons-wrapper_icon'
						>
							<img
								id='slider4'
								src={
									mouseOver === 'slider4' || slide === 'slider4'
										? icon4_w
										: icon4_o
								}
								className='section1-sliderIcons_size'
								alt='слайд4'
							/>

							<div
								id='slider4'
								className={`section1-sliderIcons_txt_wrapper ${
									slide === 'slider4'
										? 'section1-sliderIcons_txt_wrapper-wite'
										: null
								}`}
							>
								Будильник
							</div>
						</div>
						<div
							onClick={this.onClickDiv}
							onMouseOver={this.hendleMouseOver}
							onMouseOut={this.hendleMouseOut}
							id='slider5'
							className='section1-sliderIcons-wrapper_icon'
						>
							<img
								id='slider5'
								src={
									mouseOver === 'slider5' || slide === 'slider5'
										? icon5_w
										: icon5_o
								}
								className='section1-sliderIcons_size'
								alt='слайд5'
							/>

							<div
								id='slider5'
								className={`section1-sliderIcons_txt_wrapper ${
									slide === 'slider5'
										? 'section1-sliderIcons_txt_wrapper-wite'
										: null
								}`}
							>
								Встреча из<br></br>роддома
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default SimpleSlider
