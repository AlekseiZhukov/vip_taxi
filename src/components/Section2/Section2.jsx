import React from 'react'
import './Section2.css'

import Section2Box from './Section2Box'

const Section2 = () => {
	return (
		<div className='section2'>
			<div className='section2-wrapper'>
				<Section2Box
					className='section2-box1_heder'
					h3='Ваш трезвый водитель'
					p='Вам всегда доступна возможность уехать из любого места на своем автомобиле'
				/>
				<Section2Box
					className='section2-box2_heder'
					h3='Выбирайте автомобиль'
					p='Вам всегда доступен выбор транспортного средства с учетом Ваших личных предпочтений'
				/>
				<Section2Box
					className='section2-box3_heder'
					h3='Детское кресло'
					p='Мы уверены в своих водителях и в системах безопасности наших автомобилей и мы обеспечим дополнительную безопасность ребенка в автомобиле. '
				/>
				<Section2Box
					className='section2-box4_heder'
					h3='Оплата картой'
					p='Для Вас доступна оплата услуг банковскими картами VISA и MasterCard'
				/>
				<Section2Box
					className='section2-box5_heder'
					h3='Инкогнито'
					p='По Вашей просьбе водитель может не афишировать свою работу в такси. Он может принять роль хорошего знакомого, персонального водителя, личного охранника. Мы работаем на ваш имидж.'
				/>
				<Section2Box
					className='section2-box6_heder'
					h3='Персональный водитель'
					p='Вы можете заключить с нашей службой договор на обслуживание. Все условия обсуждаются индивидуально. При этом Вы получаете гарантию качественного транспортного обслуживания.'
				/>
			</div>
		</div>
	)
}

export default Section2
