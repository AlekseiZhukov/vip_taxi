import React from 'react'
import './Conditions.css'

class Conditions extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			conditionFaid: false,
		}
	}
	conditionOn = () => {
		this.setState({
			conditionFaid: true,
		})
	}

	componentDidMount() {
		this.onCondition = setInterval(this.conditionOn, 10)
	}

	componentWillUnmount() {
		clearInterval(this.onCondition)
	}

	render() {
		const { conditionFaid } = this.state
		const { close } = this.props
		return (
			<div className={`${conditionFaid ? 'conditions-on' : 'conditions'}`}>
				<div className='closeConditions' onClick={close}>
					X
				</div>
				<div className='conditions-wrapper'>
					<h1>Условия, правила, требования:</h1>
					<hr className='conditions-wrapper_line'></hr>
					<ol>
						<li>
							<span className='conditions-wrapper-li'>
								Запрещается курение и распитие спиртных напитков в салоне
								автомобиля ВИП Такси без согласия водителя. Согласие водителя не
								освобождает Вас от ответственности за порчу салона и не налагает
								на водителя или ВИП Такси ответственность за порчу Ваших личных
								вещей вследствие указанных действий.
							</span>
						</li>
						<li>
							<span className='conditions-wrapper-li'>
								ВИП Такси и водитель не несут ответственности за вещи, забытые в
								автомобиле. Найденные предметы водитель передает в диспетчерскую
								ВИП Такси.
							</span>
						</li>
						<li>
							<span className='conditions-wrapper-li'>
								Возможность изменения параметров заказа определяет диспетчер ВИП
								Такси. При этом диспетчер сообщает об изменении стоимости
								заказа. При отказе от оплаты дополнительного времени заказа или
								дополнительного пробега обслуживание прекращается.
							</span>
						</li>
						<li>
							<span className='conditions-wrapper-li'>
								В случае неисправности заказанного автомобиля ВИП Такси
								оставляет за собой право заменить его на равноценный автомобиль
								или автомобиль классом выше.
							</span>
						</li>
						<li>
							<span className='conditions-wrapper-li'>
								В случае поломки автомобиля клиент вправе отказаться от
								дальнейшего обслуживания с оплатой фактически отработанного
								времени/пройденного пробега, или потребовать замены автомобиля
								на аналогичный или более высокого класса. При этом время,
								потраченное на ремонт на месте или на предоставление другого
								автомобиля, не считается временем заказа.
							</span>
						</li>
						<li>
							<span className='conditions-wrapper-li'>
								Клиент не вправе требовать превышения установленной скорости и
								нарушения правил дорожного движения.
							</span>
						</li>
						<li>
							<span className='conditions-wrapper-li'>
								Все платные парковки, стоянки и проезды оплачиваются клиентом,
								кроме случаев, включенных в услуги ВИП Такси (например,
								трансфер).
							</span>
						</li>
						<li>
							<span className='conditions-wrapper-li'>
								Клиент несет материальную ответственность за разбитые,
								порезанные, испачканные предметы салона. При этом клиент
								выплачивает денежную компенсацию водителю.
							</span>
						</li>
						<li>
							<span className='conditions-wrapper-li'>
								Запрещается перевозить в автомобилях ВИП Такси крупных животных,
								а также других животных без специальных сумок-перевозок
								(контейнеров). О намерении перевозить животное необходимо
								заранее информировать диспетчера ВИП Такси.
							</span>
						</li>
						<li>
							<span className='conditions-wrapper-li'>
								Запрещается перевозить источники резких неприятных запахов
								(например, химические реактивы в открытых емкостях), так как
								указанные запахи могут впитаться в отделку салона автомобиля.
								Автомобиль не сможет быть использован в дальнейшем вплоть до
								выветривания таких запахов.
							</span>
						</li>
					</ol>
				</div>
			</div>
		)
	}
}

export default Conditions
