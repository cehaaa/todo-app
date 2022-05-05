import React from "react";

export type CardProps = {
	children?: React.ReactNode;
	props?: any;
	onClick?:
		| ((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void)
		| undefined;
};

export default CardProps;
