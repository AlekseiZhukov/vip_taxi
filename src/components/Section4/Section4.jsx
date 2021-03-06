import React from 'react'
import Slider from 'react-slick'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './Section4.css'

class Section4 extends React.Component {
	render() {
		var settings = {
			dots: true,
			infinite: true,
			speed: 500,
			slidesToShow: 1,
			slidesToScroll: 1,
		}
		return (
			<div className='section4' id='cars'>
				<div className='section4-blackout'></div>
				<div className='section4-wrapper'>
					<div className='section4-slide-box'>
						<div className='section4-slide-box_shading'></div>
					</div>
					<Slider {...settings}>
						<div>
							<div className='section4-slide'>
								<div className='section4-slide-box-text'>
									<h1>Mercedes S-klass</h1>

									<ul>
										<li>
											<span className='section4-slide-box-text_tariff'>
												от 1500р в час или 80р за км
											</span>
										</li>

										<li>
											<span className='section4-slide-box-text_li'>
												минимальный заказ 700 руб. до 4 км
											</span>
										</li>
										<li>
											<span className='section4-slide-box-text_li'>
												при посадке ожидание до 10 минут бесплатно
											</span>
										</li>
										<li>
											<span className='section4-slide-box-text_li'>
												ожидание свыше 10 минут — 25 руб. минута
											</span>
										</li>
										<li>
											<span className='section4-slide-box-text_li'>
												минимальный заказ при почасовой оплате 2 часа
											</span>
										</li>
									</ul>
									<div className='section4-slide-box-text-colors'>
										<p>
											<span className='section4-slide-box-text-colors_header'>
												ДОСТУПНЫЙ ЦВЕТ:
											</span>
										</p>
										<div className='section4-slide-box-text-colors_black'></div>
										<div className='section4-slide-box-text-colors_white'></div>
									</div>
								</div>
								<img
									className='section4-img'
									src='./images/mers.png'
									alt='slide'
								/>
								<div className='section4-slide-box-text__footnote'>
									<p>
										только трансфер, междугородние поездки, почасовой заказ от
										4-х часов.
									</p>
								</div>
							</div>
						</div>
						<div>
							<div className='section4-slide'>
								<div className='section4-slide-box-text'>
									<h1>Mercedes E-klass</h1>

									<ul>
										<li>
											<span className='section4-slide-box-text_tariff'>
												от 1500р в час или 80р за км
											</span>
										</li>

										<li>
											<span className='section4-slide-box-text_li'>
												минимальный заказ 700 руб. до 4 км
											</span>
										</li>
										<li>
											<span className='section4-slide-box-text_li'>
												при посадке ожидание до 10 минут бесплатно
											</span>
										</li>
										<li>
											<span className='section4-slide-box-text_li'>
												ожидание свыше 10 минут — 25 руб. минута
											</span>
										</li>
										<li>
											<span className='section4-slide-box-text_li'>
												минимальный заказ при почасовой оплате 2 часа
											</span>
										</li>
									</ul>
									<div className='section4-slide-box-text-colors'>
										<p>
											<span className='section4-slide-box-text-colors_header'>
												ДОСТУПНЫЙ ЦВЕТ:
											</span>
										</p>
										<div className='section4-slide-box-text-colors_black'></div>
										<div className='section4-slide-box-text-colors_white'></div>

									</div>
								</div>
								<img
									className='section4-img'
									src='./images/mersE.png'
									alt='slide'
								/>
							</div>
						</div>
						<div>
							<div className='section4-slide'>
								<div className='section4-slide-box-text'>
									<h1>Toyota Camry v70</h1>

									<ul>
										<li>
											<span className='section4-slide-box-text_tariff'>
												от 750р в час или 40р за км
											</span>
										</li>

										<li>
											<span className='section4-slide-box-text_li'>
												минимальный заказ 350 руб. до 4 км
											</span>
										</li>
										<li>
											<span className='section4-slide-box-text_li'>
												при посадке ожидание до 10 минут бесплатно
											</span>
										</li>
										<li>
											<span className='section4-slide-box-text_li'>
												ожидание свыше 10 минут — 12,50 руб. минута
											</span>
										</li>
										<li>
											<span className='section4-slide-box-text_li'>
												минимальный заказ при почасовой оплате 2 часа
											</span>
										</li>
									</ul>
									<div className='section4-slide-box-text-colors'>
										<p>
											<span className='section4-slide-box-text-colors_header'>
												ДОСТУПНЫЙ ЦВЕТ:
											</span>
										</p>
										<div className='section4-slide-box-text-colors_black'></div>
										<div className='section4-slide-box-text-colors_white'></div>
									</div>
								</div>
								<img
									className='section4-img'
									src='./images/camry70.png'
									alt='slide'
								/>
							</div>
						</div>
						<div>
							<div className='section4-slide'>
								<div className='section4-slide-box-text'>
									<h1>Toyota Camry v55</h1>

									<ul>
										<li>
											<span className='section4-slide-box-text_tariff'>
												от 750р в час или 40р за км
											</span>
										</li>

										<li>
											<span className='section4-slide-box-text_li'>
												минимальный заказ 350 руб. до 4 км
											</span>
										</li>
										<li>
											<span className='section4-slide-box-text_li'>
												при посадке ожидание до 10 минут бесплатно
											</span>
										</li>
										<li>
											<span className='section4-slide-box-text_li'>
												ожидание свыше 10 минут — 12,50 руб. минута
											</span>
										</li>
										<li>
											<span className='section4-slide-box-text_li'>
												минимальный заказ при почасовой оплате 2 часа
											</span>
										</li>
									</ul>
									<div className='section4-slide-box-text-colors'>
										<p>
											<span className='section4-slide-box-text-colors_header'>
												ДОСТУПНЫЙ ЦВЕТ:
											</span>
										</p>
										<div className='section4-slide-box-text-colors_black'></div>
										<div className='section4-slide-box-text-colors_white'></div>
									</div>
								</div>
								<img
									className='section4-img'
									src='./images/camry-big.png'
									alt='slide'
								/>
							</div>
						</div>
						<div>
							<div className='section4-slide'>
								<div className='section4-slide-box-text'>
									<h1>Mercedes Sprinter</h1>

									<ul>
										<li>
											<span className='section4-slide-box-text_tariff'>
												от 750р в час или 40р за км
											</span>
										</li>

										<li>
											<span className='section4-slide-box-text_li'>
												минимальный заказ 350 руб. до 4 км
											</span>
										</li>
										<li>
											<span className='section4-slide-box-text_li'>
												при посадке ожидание до 10 минут бесплатно
											</span>
										</li>
										<li>
											<span className='section4-slide-box-text_li'>
												ожидание свыше 10 минут — 12,50 руб. минута
											</span>
										</li>
										<li>
											<span className='section4-slide-box-text_li'>
												минимальный заказ при почасовой оплате 2 часа
											</span>
										</li>
									</ul>
									<div className='section4-slide-box-text-colors'>
										<p>
											<span className='section4-slide-box-text-colors_header'>
												ДОСТУПНЫЙ ЦВЕТ:
											</span>
										</p>
										<div className='section4-slide-box-text-colors_black'></div>
										<div className='section4-slide-box-text-colors_white'></div>
									</div>
								</div>
								<img
									className='section4-img'
									src='./images/Sprinter.png'
									alt='slide'
								/>
							</div>
						</div>
						<div>
							<div className='section4-slide'>
								<div className='section4-slide-box-text'>
									<h1>VW Multivan</h1>

									<ul>
										<li>
											<span className='section4-slide-box-text_tariff'>
												от 750р в час или 40р за км
											</span>
										</li>

										<li>
											<span className='section4-slide-box-text_li'>
												минимальный заказ 350 руб. до 4 км
											</span>
										</li>
										<li>
											<span className='section4-slide-box-text_li'>
												при посадке ожидание до 10 минут бесплатно
											</span>
										</li>
										<li>
											<span className='section4-slide-box-text_li'>
												ожидание свыше 10 минут — 12,50 руб. минута
											</span>
										</li>
										<li>
											<span className='section4-slide-box-text_li'>
												минимальный заказ при почасовой оплате 2 часа
											</span>
										</li>
									</ul>
									<div className='section4-slide-box-text-colors'>
										<p>
											<span className='section4-slide-box-text-colors_header'>
												ДОСТУПНЫЙ ЦВЕТ:
											</span>
										</p>
										<div className='section4-slide-box-text-colors_black'></div>
										<div className='section4-slide-box-text-colors_white'></div>
									</div>
								</div>
								<img
									className='section4-img'
									src='./images/multivan.png'
									alt='slide'
								/>
							</div>
						</div>

					</Slider>
				</div>
			</div>
		)
	}
}

export default Section4
