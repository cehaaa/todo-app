import React, { useCallback } from "react";
import ModalProps from "../ModalProps";
import XIcon from "../../../Icons/XIcon";

const CloseButtonModal: React.FC<ModalProps> = ({ onIsShowModalChange }) => {
	const closeModal = useCallback(() => {
		onIsShowModalChange(false);
	}, [onIsShowModalChange]);

	return (
		<div
			className='h-8 w-8 flex items-center justify-center rounded-lg hover:bg-red-500 hover:bg-opacity-50 duration-200 cursor-pointer'
			onClick={closeModal}>
			<XIcon className='h-5 w-5 text-red-500'></XIcon>
		</div>
	);
};

export default CloseButtonModal;
