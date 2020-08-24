import React from 'react'
import './Section3.css'

class Section3 extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			tabActive: 'tab1',
		}
	}

	onClickDiv = (event) => {
		this.setState({
			tabActive: event.target.id,
		})
	}

	render() {
		const { tabActive } = this.state
		return (
			<div className='section3' id='section3'>
				<div className='section3-wrapper'>
					<h1 className='section3-header'>Тарифы</h1>
					<div className='section3-tab-wrapper'>
						<div
							onClick={this.onClickDiv}
							className={`section3-tab ${
								tabActive === 'tab1' ? 'tabActive' : null
							}`}
							id='tab1'
						>
							<p id='tab1'>бизнес клас</p>
						</div>
						<div
							onClick={this.onClickDiv}
							className={`section3-tab ${
								tabActive === 'tab2' ? 'tabActive' : null
							}`}
							id='tab2'
						>
							<p id='tab2'>автобусы</p>
						</div>
						<div
							onClick={this.onClickDiv}
							className={`section3-tab ${
								tabActive === 'tab3' ? 'tabActive' : null
							}`}
							id='tab3'
						>
							<p id='tab3'> минивены</p>
						</div>
					</div>

					<div className='section3-wrapper-box'></div>
				</div>
			</div>
		)
	}
}

export default Section3
