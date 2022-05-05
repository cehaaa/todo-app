import React from "react";
import ModalProps from "../ModalProps";

const BodyModal: React.FC<ModalProps> = ({ children }) => {
	return <div className='py-5'> {children} </div>;
};

export default BodyModal;
