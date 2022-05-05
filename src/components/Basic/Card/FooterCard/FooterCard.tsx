import React from "react";
import CardProps from "../CardProps";

const FooterCard: React.FC<CardProps> = ({ children }) => {
	return (
		<div className='mt-3 text-gray-400'>
			<div>{children}</div>
		</div>
	);
};

export default FooterCard;
