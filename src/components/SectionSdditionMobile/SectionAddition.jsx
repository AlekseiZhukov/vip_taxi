import React from 'react'

import style from './SectionAddition.module.css'

const SectionAdditionMobile = () => {
	return (
		<div className={style.sectionAdditionM}>
			<div className={style.sectionAdditionWrapperM}>
				<div className={style.sectionAdditionWrapperBoxM}>
					<div className={style.sectionAdditionBox}>
						<div className={style.sectionAdditionHeder1M}>
						<h3>Трансфер</h3>
						<p>Стоимость услуги - 1300 руб., детали уточните у оператора. Сбор/развоз по нескольким адресам в черте города или за город тарифицируются дополнительно</p>
						</div>
					</div>
					<div className={style.sectionAdditionBox}>
						<div className={style.sectionAdditionHeder2M}>
						<h3>Выбор автомобиля</h3>
						<p>Услуга может быть предоставлена только при предварительном заказе минимум за 1 час. Стоимость услуги 300 рублей. Есть внедорожники.</p>
						</div>
					</div>
					<div className={style.sectionAdditionBox}>
						<div className={style.sectionAdditionHeder3M}>
						<h3>Прочие расходы</h3>
						<p>Все платные парковки, стоянки и проезды оплачиваются клиентом, кроме случаев, включенных в услуги ВИП Такси (например, трансфер)</p>
						</div>
					</div>

				</div>
			</div>
		</div>
	)
}

export default SectionAdditionMobile
