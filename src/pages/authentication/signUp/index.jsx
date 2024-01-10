import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import Select from "react-select";
import header from "../../../assets/images/header.svg";
import FormLabel from "../../../components/FormLabel";
import Spacer from "../../../components/Spacer";

import { tw } from "./tailwindClasses";
import options from "./options";

import {
	ValidateEmail,
	ValidatePassword,
	ValidateUsername,
	ValidateAge,
} from "../../../utils/InputValidation";
import SelectProps from "./props";

import OnFocusMessage from "../../../components/OnFocusMessage";

import { signUp } from "../../../store/session";

const SignUp = ({ setUserExists }) => {
	const [email, setEmail] = useState("");
	const [displayName, setDisplayName] = useState("");
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [dob, setDOB] = useState({ month: "", day: "", year: "" });
	const [currentFocus, setCurrentFocus] = useState("");

	const dispatch = useDispatch();

	const handleSubmit = (e) => {
		e.preventDefault();

		const isValidEmail = ValidateEmail(email);
		const isValidPassword = ValidatePassword(password);
		const isValidUsername = ValidateUsername(username);
		const isValidAge = ValidateAge(dob);

		try {
			if (!isValidEmail) throw new Error("Invalid email address.");
			if (!username) {
				throw new Error("Please enter a username.");
			}
			if (!isValidPassword)
				throw new Error(
					"Password must be 8+ characters, mix of upper/lowercase, and at least 1 number."
				);
			if (!isValidUsername)
				throw new Error(
					"Please only use numbers, letters, underscores _ , or periods."
				);
			if (!isValidAge)
				throw new Error(
					"You must be 13 years of age or older to register."
				);

			const data = { email, displayName, username, password, dob };

			const res = dispatch(signUp(data));
			console.log(res, "res from dispatch - sign up");
		} catch (err) {
			alert(err.message);
		}
	};

	useEffect(() => {
		return () => {
			setEmail("");
			setDisplayName("");
			setUsername("");
			setPassword("");
			setDOB({ month: "", day: "", year: "" });
		};
	}, []);

	return (
		<div className="bg-primary mobile:w-full sm:w-[480px] text-white sm:rounded-md sm:shadow-md">
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
						onChange={(e) => setEmail(e.target.value)}
						onFocus={() => setCurrentFocus("email")}
					/>
					<Spacer />
					<FormLabel name="DISPLAY NAME" />
					<input
						type="text"
						className={tw.input}
						onChange={(e) => setDisplayName(e.target.value)}
						onFocus={() => setCurrentFocus("display_name")}
					/>
					<OnFocusMessage
						currentFocus={currentFocus}
						target="display_name"
						message="This is how others see you. You can use special characters. (Optional)"
					/>
					<Spacer />
					<FormLabel name="USERNAME" required />
					<input
						type="text"
						className={tw.input}
						onFocus={() => setCurrentFocus("username")}
						onChange={(e) => setUsername(e.target.value)}
					/>
					<OnFocusMessage
						currentFocus={currentFocus}
						target="username"
						message="Please only use numbers, letters, underscores _ , or
							periods."
					/>
					<Spacer />
					<FormLabel name="PASSWORD" required />
					<input
						type="password"
						className={tw.input}
						autoComplete="off"
						onChange={(e) => setPassword(e.target.value)}
						onFocus={() => setCurrentFocus("password")}
					/>
					<OnFocusMessage
						currentFocus={currentFocus}
						target="password"
						message="8+ characters, mix of upper/lowercase, and at least 1 number."
					/>
					<Spacer />
					<FormLabel name="DATE OF BIRTH" required />
					<section className="flex pt-1 justify-between">
						<Select
							{...SelectProps}
							defaultValue={dob.month}
							className="w-full"
							placeholder="Month"
							components={{
								IndicatorSeparator: () => null,
							}}
							options={options.month}
							onFocus={() => setCurrentFocus("dob")}
							onChange={(e) =>
								typeof e === "object" && e !== null
									? setDOB({ ...dob, month: e.value })
									: setDOB({ ...dob, month: "" })
							}
						/>
						<Select
							{...SelectProps}
							defaultValue={dob.day}
							options={options.day(dob.month)}
							placeholder="Day"
							onFocus={() => setCurrentFocus("dob")}
							onChange={(e) =>
								typeof e === "object" && e !== null
									? setDOB({ ...dob, day: e.value })
									: setDOB({ ...dob, day: "" })
							}
						/>
						<Select
							{...SelectProps}
							defaultValue={dob.year}
							options={options.year()}
							placeholder="Year"
							onFocus={() => setCurrentFocus("dob")}
							onChange={(e) =>
								typeof e === "object" && e !== null
									? setDOB({ ...dob, year: e.value })
									: setDOB({ ...dob, year: "" })
							}
						/>
					</section>
					<div className="relative">
						<p
							className={`text-sm pt-1 opacity-0 transition-opacity duration-300 ${
								currentFocus === "dob"
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
				<div className={tw.switch} onClick={() => setUserExists(true)}>
					Already have an account?
				</div>
			</form>
		</div>
	);
};

export default SignUp;
