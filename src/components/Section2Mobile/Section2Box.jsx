import React from 'react'
import './Section2.css'

const Section2Box = ({ className, h3, p }) => {
	return (
		<div className='section2-boxM'>
			<h3 className={`section2-box_hederM ${className}`}>{h3}</h3>
			<p className='section2-box-textM'>{p}</p>
		</div>
	)
}

export default Section2Box
