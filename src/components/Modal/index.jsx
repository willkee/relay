import { useSelector, useDispatch } from "react-redux";
import ReactDOM from "react-dom";

import { hideModal, currentModal } from "../../store/modal";

export const Modal = () => {
	const dispatch = useDispatch();

	const mount = useSelector((state) => state.modal.mount);
	const display = useSelector((state) => state.modal.display);
	const CurrentComponent = useSelector((state) => state.modal.current);

	const closeModal = () => {
		dispatch(hideModal());
		dispatch(currentModal(null));
	};

	return (
		display &&
		mount &&
		ReactDOM.createPortal(
			<div
				className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-75 backdrop-blur flex justify-center items-center z-50"
				onClick={closeModal}
			>
				<div
					className="bg-transparent flex justify-center items-center shadow-inner overflow-hidden z-[101] w-fit"
					onClick={(e) => e.stopPropagation()}
				>
					<CurrentComponent />
				</div>
			</div>,
			mount
		)
	);
};

export default Modal;
