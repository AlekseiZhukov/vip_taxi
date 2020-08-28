import React from 'react'
import './FeedbackForm.css'
import Input from './Input/Input'

class FeedbackForm extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			feedbackForm: false,
		}
	}
	feedbackFormOn = () => {
		this.setState({
			feedbackForm: true,
		})
	}
	componentDidMount() {
		this.feedbackFormInterval = setInterval(this.feedbackFormOn, 10)
	}

	componentWillUnmount() {
		clearInterval(this.feedbackFormInterval)
	}

	render() {
		const { close, conditionOn } = this.props
		const { feedbackForm } = this.state

		return (
			<div
				className={`${
					feedbackForm ? 'feedbackForm-shading-on' : 'feedbackForm-shading'
				}`}
			>
				<div className='feedbackForm'>
					<h1>Заказать такси</h1>

					<form
						className='feedbackForm-form'
						autoComplete='off'
						action='#'
						method='post'
					>
						<Input
							classNameLabel='feedbackForm-Lable'
							textLable='как к Вам обращаться: '
							classNameInput='feedbackForm-nameInput'
							typeInput='text'
							required
						/>
						<Input
							classNameLabel='feedbackForm-Lable'
							textLable='номер телефона для связи с Вами: '
							classNameInput='feedbackForm-nameInput'
							typeInput='tel'
							required
						/>
						<Input
							classNameLabel='feedbackForm-Lable'
							textLable='по какому адресу подать автомобиль: '
							classNameInput='feedbackForm-nameInput'
							typeInput='text'
							required
						/>
						<lable className='feedbackForm-Lable'>
							Ваши пожелания:
							<textarea className='feedbackForm-textArea'></textarea>
						</lable>
						<div class='feedbackForm_container_checkbox'>
							<label className='feedbackForm-checkbox'>
								<input
									className='feedbackForm-input_checkbox'
									required
									type='checkbox'
								/>
								<span>
									я согласен с{' '}
									<span class='checkbox_text' onClick={conditionOn}>
										правилами, условиями и требованиями
									</span>{' '}
									службы Вип Такси Нижний Новгород
								</span>
							</label>
						</div>

						<Input
							classNameLabel='feedbackForm-lableSubmit'
							classNameInput='feedbackForm-submit'
							typeInput='submit'
							value='вызвать такси'
						/>
						<button className='closefeedbackForm' onClick={close}>
							отменить
						</button>
					</form>
				</div>
			</div>
		)
	}
}
export default FeedbackForm
