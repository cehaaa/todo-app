import React from "react";
import ModalProps from "../ModalProps";

const BaseModal: React.FC<ModalProps> = ({ isShow, children }) => {
	return (
		<>
			{isShow && (
				<div className='h-screen w-screen bg-gray-400 bg-opacity-50 fixed flex items-center justify-center top-0 right-0'>
					<div className='bg-white w-6/12 p-5 rounded-md'>{children}</div>
				</div>
			)}
		</>
	);
};

export default BaseModal;
