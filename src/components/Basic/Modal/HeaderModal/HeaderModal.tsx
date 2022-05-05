import React from "react";

import ModalProps from "../ModalProps";

const HeaderModal: React.FC<ModalProps> = ({ children }) => {
	return <div className='flex justify-between items-center'>{children}</div>;
};

export default HeaderModal;
