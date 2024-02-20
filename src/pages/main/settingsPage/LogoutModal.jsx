import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../../../store/session";
import { currentModal, hideModal } from "../../../store/modal";

const LogoutModal = ({ hideLogoutModal }) => {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const handleLogout = () => {
		dispatch(logout());
		hideLogoutModal();
		navigate("/login");
		dispatch(hideModal());
		dispatch(currentModal(null));
	};

	const btn =
		"w-24 h-[38px] flex items-center justify-center font-ggBold cursor-pointer text-sm rounded";
	return (
		<div
			className="fixed text-white top-0 bottom-0 left-0 right-0 flex items-center justify-center backdrop-blur-sm bg-black bg-opacity-70"
			onClick={hideLogoutModal}
		>
			<div
				className="bg-primary w-[440px] rounded"
				onClick={(e) => e.stopPropagation()}
			>
				<h1 className="p-4 font-ggBold text-xl h-14">Log Out</h1>
				<p className="h-[74px] pb-5 px-4 text-discord-text-100 text-base font-ggMedium">
					Are you sure you want to logout?
				</p>
				<section className="h-[70px] bg-discord-sidebar-2 p-4 flex justify-end">
					<div
						className={`${btn} hover:underline`}
						onClick={hideLogoutModal}
					>
						Cancel
					</div>
					<div
						className={`${btn} bg-danger-btn hover:bg-danger-hover`}
						onClick={handleLogout}
					>
						Logout
					</div>
				</section>
			</div>
		</div>
	);
};

export default LogoutModal;
