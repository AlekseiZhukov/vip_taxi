import React, { Component } from 'react'
import  style from './HeaderMobile.module.css'
import logo from '../Header/logoVipTaxi.svg'
import styled, { keyframes } from 'styled-components'
import { pulse } from 'react-animations'
const Pulse = styled.div`
	animation: infinite 1s ${keyframes`${pulse}`};
`

class HeaderMobile extends Component {
	render() {
		const { click } = this.props
		return (
			<div className={style.headerMobile}>
				<div className={style.headerWrapperMobile}>
					<div className={style.headerBoxMobile}>



							<div className={style.headerHeadingWrapperMobile}>
								<img src={logo} alt='Вип такси НН' className={style.headerLogoMobile} />
								<h1 className={style.headerHeadingMobile}>
									<span className={style.headerHeadingWord}>В</span>ип{' '}
									<span className={style.headerHeadingWord}>Т</span>акси{' '}
									<span className={style.headerHeadingWord}>Н</span>ижний{' '}
									<span className={style.headerHeadingWord}>Н</span>овгород
								</h1>
							</div>
							<ul className={style.nav}>
								<li>
									<a className={style.headerHeadingLink} href='#cars'>
										тарифы и автомобили
									</a>
								</li>

								<li>
									<span className={style.headerHeadingLink} onClick={click}>
										правила
									</span>
								</li>
								<li>
									<a className={style.headerHeadingLink} href='#section6'>
										контакты
									</a>
								</li>
							</ul>

						<Pulse>
							<div className={style.headerTel}><a href="tel:+7831415989">+7 (831) 415 99 89</a></div>
						</Pulse>

					</div>
				</div>
			</div>
		)
	}
}

export default HeaderMobile
