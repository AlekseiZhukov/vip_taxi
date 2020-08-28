import React, { Component } from 'react'
import './Header.css'
import logo from '../Header/logoVipTaxi.svg'
import styled, { keyframes } from 'styled-components'
import { pulse } from 'react-animations'
const Pulse = styled.div`
	animation: infinite 1s ${keyframes`${pulse}`};
`

//import { Link } from 'react-router-dom'

class Header extends Component {
	render() {
		const { click } = this.props
		return (
			<div className='header'>
				<div className='header-wrapper'>
					<div className='heder-box'>
						<img src={logo} alt='логотип' className='header-logo' />

						<div className='nav-box'>
							<h1 className='heder-heading'>
								<span className='heder-heading_word'>В</span>ип{' '}
								<span className='heder-heading_word'>Т</span>акси{' '}
								<span className='heder-heading_word'>Н</span>ижний{' '}
								<span className='heder-heading_word'>Н</span>овгород
							</h1>
							<ul className='nav'>
								<li>
									<a className='heder-heading_link' href='#cars'>
										тарифы и автомобили
									</a>
								</li>

								<li>
									<span className='heder-heading_link' onClick={click}>
										правила
									</span>
								</li>
								<li>
									<a className='heder-heading_link' href='#section6'>
										контакты
									</a>
								</li>
							</ul>
						</div>
						<Pulse>
							<span className='heder-tel'>+7 (831) 415 88 88 </span>
						</Pulse>
					</div>
				</div>
			</div>
		)
	}
}

export default Header
