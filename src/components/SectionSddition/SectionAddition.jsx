import React from 'react'
import Section2Box from '../Section2/Section2Box'
import './SectionAddition.css'

const SectionAddition = () => {
	return (
		<div className='sectionAddition'>
			<div className='sectionAddition-wrapper'>
				<div className='sectionAddition-wrapper-box'>
					<Section2Box
						className='sectionAddoition_heder1'
						h3='Трансфер'
						p='Стоимость услуги - 1300 руб., детали уточните у оператора. Сбор/развоз по нескольким адресам в черте города или за город тарифицируются дополнительно'
					/>
					<Section2Box
						className='section2-box2_heder'
						h3='Выбор автомобиля'
						p='Услуга может быть предоставлена только при предварительном заказе минимум за 1 час. Стоимость услуги 300 рублей. Есть внедорожники.'
					/>
					<Section2Box
						className='sectionAddoition_heder3'
						h3='Прочие расходы'
						p=' Все платные парковки, стоянки и проезды оплачиваются клиентом, кроме случаев, включенных в услуги ВИП Такси (например, трансфер)'
					/>
				</div>
			</div>
		</div>
	)
}

export default SectionAddition
