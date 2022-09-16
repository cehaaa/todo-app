import React from "react";
import IconProps from "./IconProps";

const CheckIcon: React.FC<IconProps> = ({ className }) => {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			className={className}
			fill='none'
			viewBox='0 0 24 24'
			strokeWidth={2.5}
			stroke='currentColor'>
			<path
				strokeLinecap='round'
				strokeLinejoin='round'
				d='M4.5 12.75l6 6 9-13.5'
			/>
		</svg>
	);
};

export default CheckIcon;
