import React, { Component } from 'react'
import './Header.css'
import logo from '../Header/logoVipTaxi.svg'
import styled, { keyframes } from 'styled-components'
import { pulse } from 'react-animations'
const Pulse = styled.div`
	animation: infinite 1s ${keyframes`${pulse}`};
`

//import { Link } from 'react-router-dom'

export class Header extends Component {
	render() {
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
								<li>тарифы</li>

								<li>автомобили</li>

								<li>контакты</li>
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
