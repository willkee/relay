import { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { motion } from "framer-motion";
import Select from "react-select";
import header from "../../../assets/images/header.svg";
import FormLabel from "../../../components/FormLabel";
import Spacer from "../../../components/Spacer";

import { signUp } from "../../../store/session";
import { tw } from "./tailwindClasses";
import options from "./options";

import { useRecaptcha } from "../../../utils/useRecaptcha";

import {
	ValidateEmail,
	ValidatePassword,
	ValidateUsername,
	ValidateAge,
} from "../../../utils/InputValidation";

import SelectProps from "./props";
import OnFocusMessage from "../../../components/OnFocusMessage";

import { handleErr } from "./errors";

const SignUp = () => {
	const initialState = {
		email: "",
		displayName: "",
		username: "",
		password: "",
		dob: { month: "", day: "", year: "" },
		focus: "",
		errors: { email: "", username: "", password: "", dob: "" },
	};

	const [formData, setFormData] = useState(initialState);
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const recaptcha = useRecaptcha();

	const handleChange = useCallback((key, value) => {
		setFormData((prev) => ({
			...prev,
			[key]: value,
			errors: { ...prev.errors, [key]: "" },
		}));
	}, []);

	const resetErrors = () =>
		setFormData((prev) => ({ ...prev, errors: initialState.errors }));

	const handleSubmit = (e) => {
		e.preventDefault();
		resetErrors();

		const { email, displayName, username, password, dob } = formData;

		const validEmail = ValidateEmail(formData.email);
		const validPw = ValidatePassword(formData.password);
		const validUsr = ValidateUsername(formData.username);
		const validAge = ValidateAge(formData.dob);

		let msg;
		const state = { setFormData };
		if (!validEmail) msg = handleErr("email", "invalid", state);
		else if (!username) msg = handleErr("username", "none", state);
		else if (!validUsr) msg = handleErr("username", "invalid", state);
		else if (!password) msg = handleErr("password", "none", state);
		else if (!validPw) msg = handleErr("password", "invalid", state);
		else if (!validAge) msg = handleErr("dob", "invalid", state);
		if (msg) throw new Error(msg);

		dispatch(
			signUp({ email, displayName, username, password, dob, recaptcha })
		)
			.then((res) => (res.uid ? navigate("/loading") : null))
			.catch((e) => console.error(`Error in sign up: ${e}`));
	};

	useEffect(() => {
		return () => setFormData(initialState);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<motion.div
			exit={{ opacity: 0, y: -50 }}
			initial={{ opacity: 0, y: -50 }}
			animate={{ opacity: 1, y: 0 }}
			className="bg-primary mobile:w-full sm:w-480 text-white sm:rounded-md sm:shadow-md"
		>
			<header className="flex justify-center items-center sm:hidden">
				<img
					src={header}
					alt="header"
					width="180px"
					className="pl-2 mt-5 -mb-3 sm:hidden"
				/>
			</header>

			<form onSubmit={handleSubmit} className="p-8 mobile:w-full">
				<h1 className={tw.heading}>Create an account</h1>
				<section className="pt-4 flex flex-col">
					<FormLabel name="EMAIL" required />
					<input
						type="email"
						className={tw.input}
						onChange={(e) => handleChange("email", e.target.value)}
						onFocus={() => handleChange("focus", "email")}
						value={formData.email}
					/>
					<OnFocusMessage
						currentFocus={formData.focus}
						target="email"
						message={
							formData.errors.email
								? "Invalid email address."
								: null
						}
						type="error"
					/>
					<Spacer />
					<FormLabel name="DISPLAY NAME" />
					<input
						type="text"
						className={tw.input}
						onChange={(e) =>
							handleChange("displayName", e.target.value)
						}
						onFocus={() => handleChange("focus", "displayName")}
						value={formData.displayName}
					/>
					<OnFocusMessage
						currentFocus={formData.focus}
						target="display_name"
						message="This is how others see you. You can use special characters. (Optional)"
					/>
					<Spacer />
					<FormLabel name="USERNAME" required />
					<input
						type="text"
						className={tw.input}
						onChange={(e) =>
							handleChange("username", e.target.value)
						}
						onFocus={() => handleChange("focus", "username")}
					/>
					<OnFocusMessage
						currentFocus={formData.focus}
						target="username"
						type={formData.errors.username && "error"}
						message={
							formData.errors.username
								? formData.errors.username
								: "Please only use numbers, letters, underscores _ , or periods."
						}
					/>
					<Spacer />
					<FormLabel name="PASSWORD" required />
					<input
						type="password"
						className={tw.input}
						autoComplete="off"
						onChange={(e) =>
							handleChange("password", e.target.value)
						}
						onFocus={() => handleChange("focus", "password")}
					/>
					<OnFocusMessage
						currentFocus={formData.focus}
						target="password"
						type={formData.errors.password && "error"}
						message="8+ characters, mix of upper/lowercase, and at least 1 number."
					/>
					<Spacer />
					<FormLabel name="DATE OF BIRTH" required />
					<section className="flex pt-1 justify-between">
						<Select
							{...SelectProps}
							defaultValue={formData.dob.month}
							className="w-full"
							placeholder="Month"
							components={{ IndicatorSeparator: () => null }}
							options={options.month}
							value={options.month.find(
								(option) => option.value === formData.dob.month
							)}
							onFocus={() => handleChange("currentFocus", "dob")}
							onChange={(e) =>
								handleChange("dob", {
									...formData.dob,
									month: e ? e.value : "",
								})
							}
						/>
						<Select
							{...SelectProps}
							defaultValue={formData.dob.month}
							options={options.day(formData.dob.month)}
							placeholder="Day"
							value={options
								.day(formData.dob.month)
								.find(
									(option) =>
										option.value === formData.dob.day
								)}
							onFocus={() => handleChange("currentFocus", "dob")}
							onChange={(e) =>
								handleChange("dob", {
									...formData.dob,
									day: e ? e.value : "",
								})
							}
						/>
						<Select
							{...SelectProps}
							defaultValue={formData.dob.year}
							options={options.year()}
							placeholder="Year"
							value={options
								.year()
								.find(
									(option) =>
										option.value === formData.dob.year
								)}
							onFocus={() => handleChange("currentFocus", "dob")}
							onChange={(e) =>
								handleChange("dob", {
									...formData.dob,
									year: e ? e.value : "",
								})
							}
						/>
					</section>
					<div className="relative">
						<p
							className={`text-sm pt-1 opacity-0 transition-opacity duration-300 ${
								formData.focus === "dob"
									? "opacity-100"
									: "absolute"
							}`}
						>
							You must be 13 years of age or older to register.
						</p>
					</div>
				</section>
				<button className={tw.continue}>Continue</button>
				<p className="font-ggMedium mt-1 text-xs text-discord-text-300">
					By registering, you agree to Relay&apos;s Terms of Service
					and Privacy Policy.
				</p>
				<div className={tw.switch} onClick={() => navigate("/login")}>
					Already have an account?
				</div>
			</form>
		</motion.div>
	);
};

export default SignUp;
