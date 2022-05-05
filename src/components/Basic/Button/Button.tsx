import React from "react";
import ButtonProps from "./ButtonProps";

const Button: React.FC<ButtonProps> = ({ children, onClick, ...props }) => {
	return (
		<button
			type='submit'
			className='px-3 py-2 rounded-md bg-blue-500 duration-200 hover:bg-blue-600 text-white'
			{...props}
			onClick={onClick}>
			{children}
		</button>
	);
};

export default Button;
