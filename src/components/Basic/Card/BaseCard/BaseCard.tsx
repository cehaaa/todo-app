import React from "react";
import CardProps from "../CardProps";

const BaseCard: React.FC<CardProps> = ({ children, props, onClick }) => {
	return (
		<div
			className='bg-white rounded-md p-5 shadow'
			{...props}
			onClick={onClick}>
			{children}
		</div>
	);
};

export default BaseCard;
