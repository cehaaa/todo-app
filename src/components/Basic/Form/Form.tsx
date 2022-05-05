import React from "react";
import FormProps from "./FormProps";

const Form: React.FC<FormProps> = ({ children, onSubmit, className }) => {
	return (
		<form
			className={`flex space-y-5 flex-col ${className}`}
			onSubmit={onSubmit}>
			{children}
		</form>
	);
};

export default Form;
