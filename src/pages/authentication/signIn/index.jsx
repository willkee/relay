import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import header from "../../../assets/images/header.svg";
import FormLabel from "../../../components/FormLabel";
import { login } from "../../../store/session";
import { useNavigate } from "react-router-dom";

import { ValidateEmail } from "../../../utils/InputValidation";

import { showModal, currentModal } from "../../../store/modal";
import ForgotPassword from "./ForgotPassword";

const SignIn = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [errors, setErrors] = useState({});

	const dispatch = useDispatch();
	const navigate = useNavigate();

	const setDefaultErrors = () => setErrors({ auth: "", email: "", pw: "" });

	useEffect(() => {
		setDefaultErrors();
		return () => setDefaultErrors();
	}, []);

	const handleForgotPassword = () => {
		dispatch(currentModal(ForgotPassword));
		dispatch(showModal());
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setDefaultErrors();

		const validEmail = email && ValidateEmail(email);

		if (!validEmail) {
			setErrors((prev) => ({
				...prev,
				email: "Please enter a valid email.",
			}));
		}
		if (!password) {
			setErrors((prev) => ({ ...prev, pw: "Password is required." }));
		}

		if (validEmail && password) {
			dispatch(login(email, password))
				.then((res) => {
					if (res.uid) navigate("/loading");
				})
				.catch((e) => {
					if (e.message.includes("auth/invalid-login-credentials")) {
						setErrors((prev) => ({
							...prev,
							auth: "Invalid login credentials. Please try again.",
						}));
					} else {
						console.error(e.message);
					}
				});
		}
	};

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
				<section className="flex justify-center items-center flex-col">
					<h1 className="font-ggBold text-2xl text-discord-text-100">
						Welcome back!
					</h1>
					<h2 className="text-base text-discord-text-200">
						We&apos;re so excited to see you again!
					</h2>
				</section>
				{errors.auth && (
					<div className="font-ggMedium text-red-500 text-sm text-center pt-5">
						{errors.auth}
					</div>
				)}
				<section className="pt-4 flex flex-col">
					<FormLabel name="EMAIL" required />
					<input
						type="text"
						className="bg-discord-input-dark p-2.5 outline-none text-base h-[40px] outline-none"
						value={email}
						onChange={(e) => {
							setErrors((prev) => ({ ...prev, email: "" }));
							setEmail(e.target.value);
						}}
					/>
					{errors.email && (
						<div className="font-ggMedium text-red-500 text-sm">
							{errors.email}
						</div>
					)}
					<p className="pt-5" />
					<FormLabel name="PASSWORD" required />
					<input
						type="password"
						autoComplete="off"
						className="bg-discord-input-dark p-2.5 outline-none text-base h-[40px]"
						value={password}
						onChange={(e) => {
							setErrors((prev) => ({ ...prev, pw: "" }));
							setPassword(e.target.value);
						}}
					/>
					{errors.pw && (
						<div className="font-ggMedium text-red-500 text-sm">
							{errors.pw}
						</div>
					)}
					<p
						className="font-ggMedium text-discord-link-text text-sm pt-1 cursor-pointer hover:underline"
						onClick={handleForgotPassword}
					>
						Forgot your password?
					</p>
				</section>
				<button className="mt-5 font-ggMedium bg-discord-button w-full rounded-sm outline-none border-none focus:outline-none hover:bg-discord-button-hover">
					Log In
				</button>
				<div className="font-ggMedium mt-2 text-sm">
					<span className="text-discord-text-300">
						Need an account?
					</span>
					<span
						className="text-discord-link-text ml-1 cursor-pointer hover:underline"
						onClick={() => navigate("/register")}
					>
						Register
					</span>
				</div>
			</form>
		</div>
	);
};

export default SignIn;
