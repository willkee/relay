import FormLabel from "../../../components/FormLabel";

function ForgotPassword() {
	const handleSubmit = (e) => {
		e.preventDefault();
	};
	return (
		<div className="bg-primary mobile:w-full sm:w-[480px] text-white sm:rounded-md sm:shadow-md ">
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
						className="bg-discord-input-dark p-2.5 outline-none text-base h-[40px] outline-none"
						// value={email}
						// onChange={(e) => {
						// 	setErrors((prev) => ({ ...prev, email: "" }));
						// 	setEmail(e.target.value);
						// }}
					/>
				</section>
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
