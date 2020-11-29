import React from 'react'
import './Section6.css'

const Section5 = () => {
	return (
		<div className='section6' id='section6'>
			<div className='section6-wrapper'>

				<div className='section6-wrapper_box'>
					<h3>контакты диспетчерской службы</h3>
					<ul>
						<li>+7 (831) 4159989</li>
						<li>vip-taxinn@mail.ru</li>
						<li>
							г. Нижний Новгород, ул. Советская 12, гостиница Маринс Парк Отель
						</li>
					</ul>
					<iframe
						className='section6-frame'
						title='вип такаси нижний новгород'
						src='https://yandex.ru/map-widget/v1/?um=constructor%3Ae4720e86e912bf54f636efabffabfd80af04eb56b0bce246eccf65ef1571aef9&amp;source=constructor'
						frameBorder='0'
					></iframe>
				</div>
			</div>
		</div>
	)
}

export default Section5
