import React from "react";
import InputProps from "./InputProps";

const Input: React.FC<InputProps> = ({
	placeholder,
	name,
	label,
	value,
	handleInputChange,
}) => {
	return (
		<div>
			<label htmlFor={label}>{label}</label>
			<input
				type='text'
				className='px-3 py-2 rounded outline-none border border-gray-300 w-full focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 duration-200 mt-2'
				placeholder={placeholder}
				name={name}
				value={value}
				id={label}
				onChange={handleInputChange}
			/>
		</div>
	);
};

export default Input;
