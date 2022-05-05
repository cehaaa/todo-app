import React from "react";

export type FormProps = {
	children?: React.ReactNode;
	className?: string;
	onSubmit?: (e: any) => void;
};

export default FormProps;
