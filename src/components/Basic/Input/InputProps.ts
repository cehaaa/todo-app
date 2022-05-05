export type InputProps = {
	placeholder: string;
	name: string;
	label: string;
	value: string | undefined;
	rest?: any;
	handleInputChange?: (e: any) => void;
};

export default InputProps;
