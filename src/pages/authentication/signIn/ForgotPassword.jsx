import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import FormLabel from "../../../components/FormLabel";
import OnFocusMessage from "../../../components/OnFocusMessage";
import { ValidateEmail } from "../../../utils/InputValidation";

import { firebaseAuth, sendPasswordResetEmail } from "../../../../Firebase";

import { currentModal, showModal, hideModal } from "../../../store/modal";
import ConfirmationPrompt from "../../../components/ConfirmationPrompt";

function ForgotPassword() {
	const initialState = {
		email: "",
		errors: "",
		focus: "",
	};

	const [formData, setFormData] = useState(initialState);
	const dispatch = useDispatch();

	useEffect(() => {
		return () => setFormData(initialState);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const handleSubmit = async (e) => {
		e.preventDefault();
		setFormData((prev) => ({ ...prev, errors: "" }));

		const validEmail = ValidateEmail(formData.email);

		if (!formData.email || !validEmail) {
			setFormData((prev) => ({
				...prev,
				errors: "Please enter a valid email.",
				focus: "email",
			}));
			return;
		}

		try {
			console.log("Valid email, sending password reset email...");
			await sendPasswordResetEmail(firebaseAuth, formData.email);
			dispatch(hideModal());

			dispatch(
				currentModal(() => (
					<ConfirmationPrompt
						heading="If an account exists for the email address you entered,
						you will receive an email shortly."
						msg="Please follow the instructions in your email to reset your password."
					/>
				))
			);
			dispatch(showModal());
		} catch (err) {
			console.error(`Error sending password reset email: ${err.message}`);
		}
	};

	return (
		<div className="bg-primary mobile:w-full sm:w-480 text-white sm:rounded-md sm:shadow-md ">
			<form onSubmit={handleSubmit} className="p-8 mobile:w-full">
				<section className="flex justify-center items-center flex-col">
					<h1 className="font-ggBold text-2xl text-discord-text-100">
						Forgot Password?
					</h1>
				</section>
				<section className="pt-4 flex flex-col">
					<FormLabel name="EMAIL" required />
					<input
						type="text"
						className="font-ggMedium bg-discord-input-dark p-2.5 outline-none text-base h-10 outline-none"
						value={formData.email}
						onChange={(e) => {
							setFormData((prev) => ({
								...prev,
								errors: "",
								email: e.target.value,
							}));
						}}
					/>
				</section>
				<OnFocusMessage
					currentFocus={formData.focus}
					type="error"
					target="email"
					message="Please enter a valid email address."
				/>

				<button className="mt-5 font-ggMedium bg-discord-button w-full rounded-sm outline-none border-none focus:outline-none hover:bg-discord-button-hover">
					Send Reset Link
				</button>
				<div className="text-center mt-2 font-ggMedium text-sm text-discord-text-300">
					Know your password? Click outside this box to close.
				</div>
			</form>
		</div>
	);
}

export default ForgotPassword;
