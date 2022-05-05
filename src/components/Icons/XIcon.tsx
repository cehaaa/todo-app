import React from "react";
import IconProps from "./IconProps";

const XIocn: React.FC<IconProps> = ({ className }) => {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			className={className}
			fill='none'
			viewBox='0 0 24 24'
			stroke='currentColor'
			strokeWidth={2}>
			<path
				strokeLinecap='round'
				strokeLinejoin='round'
				d='M6 18L18 6M6 6l12 12'
			/>
		</svg>
	);
};

export default XIocn;
