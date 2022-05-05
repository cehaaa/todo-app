import BaseModal from "./BaseModal/BaseModal";
import BodyModal from "./BodyModal/BodyModal";
import HeaderModal from "./HeaderModal/HeaderModal";
import FooterModal from "./FooterModal/FooterModal";
import CloseButtonModal from "./CloseButtonModal/CloseButtonModal";

const Modal = {
	Base: BaseModal,
	Header: HeaderModal,
	Body: BodyModal,
	Footer: FooterModal,
	CloseButton: CloseButtonModal,
};

export default Modal;
