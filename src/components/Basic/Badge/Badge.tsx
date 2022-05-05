import React from "react";
import BadgeProps from "./BadgeProps";

const Badge: React.FC<BadgeProps> = ({ status, children }) => {
	const badgeStyles = (): string => {
		if (status === "success") {
			return "bg-green-500 text-green-500";
		} else if (status === "warning") {
			return "bg-yellow-500 text-yellow-500";
		} else {
			return "bg-blue-500 text-blue-500";
		}
	};

	return (
		<div
			className={`${badgeStyles()}  text-xs py-1 px-2 inline-flex rounded bg-opacity-30 font-medium`}>
			{children}
		</div>
	);
};

export default Badge;
