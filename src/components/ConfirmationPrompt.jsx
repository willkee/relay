import { useDispatch } from "react-redux";
import { currentModal, hideModal } from "../store/modal";

function ConfirmationPrompt({ heading, msg }) {
	const dispatch = useDispatch();

	const handleClick = () => {
		dispatch(hideModal());
		dispatch(currentModal(null));
	};

	return (
		<div className="bg-primary mobile:w-full sm:w-480 text-white sm:rounded-md sm:shadow-md ">
			<div className="p-8 mobile:w-full">
				<section className="flex justify-center items-center flex-col">
					<div className="font-ggBold text-xl text-discord-text-100">
						{heading}
					</div>
					<div className="font-ggMedium text-md text-discord-text-100 mt-2">
						{msg}
					</div>
					<button
						className="mt-5 font-ggMedium bg-discord-button w-full rounded-sm outline-none border-none focus:outline-none hover:bg-discord-button-hover"
						onClick={handleClick}
					>
						Sounds good!
					</button>
				</section>
			</div>
		</div>
	);
}

export default ConfirmationPrompt;
