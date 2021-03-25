import React from 'react'
import Slider from 'react-slick'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './Section4Mobile.css'

class Section4Mobile extends React.Component {
	render() {
		const settings = {
			dots: true,
			infinite: true,
			speed: 500,
			slidesToShow: 1,
			slidesToScroll: 1,
		}
		return (
			<div className='section4M' id='cars'>
				<div className='section4-blackoutM'></div>
				<div className='section4-wrapperM'>

					<Slider {...settings}>
						<div>
							<div className='section4-slideM'>
								<div className='section4-slide-box-textM'>
									<h1>Mercedes S-klass</h1>

									<ul>
										<li>
											<span className='section4-slide-box-text_liM'>
												от 1500р в час или 80р за км
											</span>
										</li>


										<li>
											<span className='section4-slide-box-text_liM'>
												при посадке ожидание до 10 минут бесплатно
											</span>
										</li>
										<li>
											<span className='section4-slide-box-text_liM'>
												ожидание свыше 10 минут — 25 руб. минута
											</span>
										</li>
										<li>
											<span className='section4-slide-box-text_liM'>
												минимальный заказ при почасовой оплате 2 часа
											</span>
										</li>
									</ul>
									<div className='section4-slide-box-text-colorsM'>
										<p>
											<span className='section4-slide-box-text-colors_headerM'>
												ДОСТУПНЫЙ ЦВЕТ:
											</span>
										</p>
										<div className='section4-slide-box-text-colors_blackM'></div>
										<div className='section4-slide-box-text-colors_whiteM'></div>
									</div>
								</div>
								<img
									className='section4-imgM'
									src='./images/mers.png'
									alt='slide'
								/>

							</div>
						</div>
						<div>
							<div className='section4-slideM'>
								<div className='section4-slide-box-textM'>
									<h1>Mercedes E-klass</h1>

									<ul>
										<li>
											<span className='section4-slide-box-text_liM'>
												от 1500р в час или 80р за км
											</span>
										</li>


										<li>
											<span className='section4-slide-box-text_liM'>
												при посадке ожидание до 10 минут бесплатно
											</span>
										</li>
										<li>
											<span className='section4-slide-box-text_liM'>
												ожидание свыше 10 минут — 25 руб. минута
											</span>
										</li>
										<li>
											<span className='section4-slide-box-text_liM'>
												минимальный заказ при почасовой оплате 2 часа
											</span>
										</li>
									</ul>
									<div className='section4-slide-box-text-colorsM'>
										<p>
											<span className='section4-slide-box-text-colors_headerM'>
												ДОСТУПНЫЙ ЦВЕТ:
											</span>
										</p>
										<div className='section4-slide-box-text-colors_blackM'></div>
										<div className='section4-slide-box-text-colors_whiteM'></div>

									</div>
								</div>
								<img
									className='section4-imgM'
									src='./images/mersE.png'
									alt='slide'
								/>
							</div>
						</div>
						<div>
							<div className='section4-slideM'>
								<div className='section4-slide-box-textM'>
									<h1>Toyota Camry v70</h1>

									<ul>
										<li>
											<span className='section4-slide-box-text_liM'>
												от 750р в час или 40р за км
											</span>
										</li>


										<li>
											<span className='section4-slide-box-text_liM'>
												при посадке ожидание до 10 минут бесплатно
											</span>
										</li>
										<li>
											<span className='section4-slide-box-text_liM'>
												ожидание свыше 10 минут — 12,50 руб. минута
											</span>
										</li>
										<li>
											<span className='section4-slide-box-text_liM'>
												минимальный заказ при почасовой оплате 2 часа
											</span>
										</li>
									</ul>
									<div className='section4-slide-box-text-colorsM'>
										<p>
											<span className='section4-slide-box-text-colors_headerM'>
												ДОСТУПНЫЙ ЦВЕТ:
											</span>
										</p>
										<div className='section4-slide-box-text-colors_blackM'></div>
										<div className='section4-slide-box-text-colors_whiteM'></div>
									</div>
								</div>
								<img
									className='section4-imgM'
									src='./images/camry70.png'
									alt='slide'
								/>
							</div>
						</div>
						<div>
							<div className='section4-slideM'>
								<div className='section4-slide-box-textM'>
									<h1>Toyota Camry v55</h1>

									<ul>
										<li>
											<span className='section4-slide-box-text_liM'>
												от 750р в час или 40р за км
											</span>
										</li>


										<li>
											<span className='section4-slide-box-text_liM'>
												при посадке ожидание до 10 минут бесплатно
											</span>
										</li>
										<li>
											<span className='section4-slide-box-text_liM'>
												ожидание свыше 10 минут — 12,50 руб. минута
											</span>
										</li>
										<li>
											<span className='section4-slide-box-text_liM'>
												минимальный заказ при почасовой оплате 2 часа
											</span>
										</li>
									</ul>
									<div className='section4-slide-box-text-colorsM'>
										<p>
											<span className='section4-slide-box-text-colors_headerM'>
												ДОСТУПНЫЙ ЦВЕТ:
											</span>
										</p>
										<div className='section4-slide-box-text-colors_blackM'></div>
										<div className='section4-slide-box-text-colors_whiteM'></div>
									</div>
								</div>
								<img
									className='section4-imgM'
									src='./images/camry-big.png'
									alt='slide'
								/>
							</div>
						</div>
						<div>
							<div className='section4-slideM'>
								<div className='section4-slide-box-textM'>
									<h1>Mercedes Sprinter</h1>

									<ul>
										<li>
											<span className='section4-slide-box-text_liM'>
												от 750р в час или 40р за км
											</span>
										</li>


										<li>
											<span className='section4-slide-box-text_liM'>
												при посадке ожидание до 10 минут бесплатно
											</span>
										</li>
										<li>
											<span className='section4-slide-box-text_liM'>
												ожидание свыше 10 минут — 12,50 руб. минута
											</span>
										</li>
										<li>
											<span className='section4-slide-box-text_liM'>
												минимальный заказ при почасовой оплате 2 часа
											</span>
										</li>

									</ul>
									<div className='section4-slide-box-text-colorsM'>
										<p>
											<span className='section4-slide-box-text-colors_headerM'>
												ДОСТУПНЫЙ ЦВЕТ:
											</span>
										</p>
										<div className='section4-slide-box-text-colors_blackM'></div>
										<div className='section4-slide-box-text-colors_whiteM'></div>
									</div>
								</div>
								<div  className='section4-slide-box-text-lastLine'>

								</div>
								<img
									className='section4-imgM'
									src='./images/Sprinter.png'
									alt='slide'
								/>
							</div>
						</div>
						<div>
							<div className='section4-slideM'>
								<div className='section4-slide-box-textM'>
									<h1>VW Multivan</h1>

									<ul>
										<li>
											<span className='section4-slide-box-text_liM'>
												от 750р в час или 40р за км
											</span>
										</li>


										<li>
											<span className='section4-slide-box-text_liM'>
												при посадке ожидание до 10 минут бесплатно
											</span>
										</li>
										<li>
											<span className='section4-slide-box-text_liM'>
												ожидание свыше 10 минут — 12,50 руб. минута
											</span>
										</li>
										<li>
											<span className='section4-slide-box-text_liM'>
												минимальный заказ при почасовой оплате 2 часа
											</span>
										</li>

									</ul>
									<div className='section4-slide-box-text-colorsM'>
										<p>
											<span className='section4-slide-box-text-colors_headerM'>
												ДОСТУПНЫЙ ЦВЕТ:
											</span>
										</p>
										<div className='section4-slide-box-text-colors_blackM'></div>
										<div className='section4-slide-box-text-colors_whiteM'></div>
									</div>
								</div>
								<div  className='section4-slide-box-text-lastLine'>

								</div>
								<img
									className='section4-imgM'
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

export default Section4Mobile
