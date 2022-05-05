export type TextareaProps = {
	placeholder: string;
	name: string;
	label: string;
	value: string | undefined;
	handleInputChange?: (e: any) => void;
};

export default TextareaProps;
