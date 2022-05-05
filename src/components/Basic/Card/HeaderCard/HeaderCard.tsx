import React from "react";
import CardProps from "./../CardProps";

const HeaderCard: React.FC<CardProps> = ({ children }) => {
	return <div className='flex justify-between'>{children}</div>;
};

export default HeaderCard;
