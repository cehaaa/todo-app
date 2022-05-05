import React from "react";
import TextareaProps from "./TextareaProps";

const Textarea: React.FC<TextareaProps> = ({
	placeholder,
	name,
	label,
	value,
	handleInputChange,
}) => {
	return (
		<div>
			<label className='mb-2' htmlFor={label}>
				{label}
			</label>
			<textarea
				className='px-3 py-2 rounded outline-none border border-gray-300 w-full focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 duration-200 resize-none mt-2'
				placeholder={placeholder}
				name={name}
				value={value}
				id={label}
				onChange={handleInputChange}>
				{value}
			</textarea>
		</div>
	);
};

export default Textarea;
