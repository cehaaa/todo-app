import React from "react";
import ModalProps from "../ModalProps";

const FooterModal: React.FC<ModalProps> = ({ children }) => {
	return <div className='flex flex-row-reverse'>{children}</div>;
};

export default FooterModal;
