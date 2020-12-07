import React from 'react'
import style from './Section5.module.css'

import yandex from '../Section5/img/yandextaxi.svg'
import hotel from '../Section5/img/marinsHotel.svg'

const Section5Mobile = () => {
	return (
		<div className={style.section5M}>
			<h1>Наши партнеры</h1>
			<div className={style.section5WrapperM}>
				<div className={style.section5WrapperBoxM}>
					<a
						href='https://taxi.yandex.ru/'
						target='_blank'
						rel='noopener noreferrer'
					>
						<img
							src={yandex}
							className={style.section5WrapperYandexM}
							alt='Яндекс Такси'
						/>
					</a>
					<p>
						VIP taxi Нижний Новгород является официальным партнером ЯНДЕКС ТАКСИ
						НИЖНИЙ НОВГОРОД.
					</p>
				</div>
				<div className={style.section5WrapperBoxM}>
					<a
						href='https://marinsparkhotels.ru/nn/rooms'
						target='_blank'
						rel='noopener noreferrer'
					>
						<img
							src={hotel}
							className={style.section5WrapperYandexM}
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
			<p className={style.section5AddressM}>
				для связи по условиям партнерства тел: +7 (831) 415 99 89,<br/> e-mail:
				vip-taxinn@mail.ru
			</p>
		</div>
	)
}

export default Section5Mobile
