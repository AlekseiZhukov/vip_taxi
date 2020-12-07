import React from 'react'
import './Section2.css'

import Section2Box from './Section2Box'
import styled, { keyframes } from 'styled-components'
import { pulse } from 'react-animations'
const Pulse = styled.div`
	animation: infinite 1s ${keyframes`${pulse}`};
`

const Section2Mobile = () => {
	return (
		<div className='section2M'>
			<div className='section2-wrapperM'>
				<Section2Box
					className='section2-box1_hederM'
					h3='Ваш трезвый водитель'
					p='Вам всегда доступна возможность уехать из любого места на своем автомобиле'
				/>
				<Section2Box
					className='section2-box4_hederM'
					h3='Оплата картой'
					p='Для Вас доступна оплата услуг банковскими картами VISA и MasterCard'
				/>
				<Section2Box
					className='section2-box3_hederM'
					h3='Детское кресло'
					p='Мы уверены в своих водителях и в системах безопасности наших автомобилей и мы обеспечим дополнительную безопасность ребенка в автомобиле. '
				/>
				<Section2Box
					className='section2-box2_hederM'
					h3='Выбирайте автомобиль'
					p='Вам всегда доступен выбор транспортного средства с учетом Ваших личных предпочтений'

				/>
				<Section2Box
					className='section2-box5_hederM'
					h3='Инкогнито'
					p='По Вашей просьбе водитель может не афишировать свою работу в такси. Он может принять роль хорошего знакомого, персонального водителя, личного охранника. Мы работаем на ваш имидж.'
				/>
				<Section2Box
					className='section2-box6_hederM'
					h3='Персональный водитель'
					p='Вы можете заключить с нашей службой договор на обслуживание. Все условия обсуждаются индивидуально. При этом Вы получаете гарантию качественного транспортного обслуживания.'
				/>
			</div>
			<Pulse>
				<div className='heder-telM'><a href="tel:+7831415989">+7 (831) 415 99 89</a></div>
			</Pulse>
		</div>
	)
}

export default Section2Mobile
