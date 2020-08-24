import React from 'react'
import './Section5.css'

import yandex from './img/yandextaxi.svg'
import hotel from './img/marinsHotel.svg'

const Section5 = () => {
	return (
		<div className='section5'>
			<h1>Наши партнеры</h1>
			<div className='section5-wrapper'>
				<div className='section5-wrapper_box'>
					<a
						href='https://taxi.yandex.ru/'
						target='_blank'
						rel='noopener noreferrer'
					>
						<img
							src={yandex}
							className='section5-wrapper_yandex'
							alt='Яндекс Такси'
						/>
					</a>
					<p>
						VIP taxi Нижний Новгород является официальным партнером ЯНДЕКС ТАКСИ
						НИЖНИЙ НОВГОРОД.
					</p>
				</div>
				<div className='section5-wrapper_box'>
					<a
						href='https://marinsparkhotels.ru/nn/rooms'
						target='_blank'
						rel='noopener noreferrer'
					>
						<img
							src={hotel}
							className='section5-wrapper_yandex'
							alt='Маринс Парк Отель'
						/>
					</a>
					<p>
						VIP taxi Нижний Новгород является официальным партнером и
						перевозчиком Маринс Парк Отель — Нижний Новгород (Marines Park
						Hotel).
					</p>
				</div>
			</div>
		</div>
	)
}

export default Section5
