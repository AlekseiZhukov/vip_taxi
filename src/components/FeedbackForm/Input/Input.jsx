import React from 'react'

const Input = (props) => {
	const {
		classNameLabel,
		classNameInput,
		typeInput,
		placeholderInput,
		textLable,

		required,
	} = props

	return (
		<label className={classNameLabel}>
			{textLable}
			<input
				className={classNameInput}
				type={typeInput}
				placeholder={placeholderInput}
				required={required ? true : false}
			/>
		</label>
	)
}

export default Input
