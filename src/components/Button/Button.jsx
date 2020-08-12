import React from 'react'
import './Button.css'

const Button = ({ value, onClick, className, id }) => {
	return (
		<input
			className={`btn ${className}`}
			type='button'
			value={value}
			onClick={onClick}
			id={id}
		/>
	)
}

export default Button
