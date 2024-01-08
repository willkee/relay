import header from "../../../assets/images/header.svg";
import FormLabel from "../../../components/FormLabel";

const SignIn = ({ setUserExists }) => {
	const handleSubmit = (e) => {
		e.preventDefault();
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
				<section className="pt-4 flex flex-col">
					<FormLabel name="EMAIL OR PHONE NUMBER" required />
					<input
						type="text"
						className="bg-discord-input-dark p-2.5 outline-none text-base h-[40px] outline-none"
					/>
					<p className="pt-5" />
					<FormLabel name="PASSWORD" required />
					<input
						type="text"
						className="bg-discord-input-dark p-2.5 outline-none text-base h-[40px]"
					/>
					<p className="font-ggMedium text-discord-link-text text-sm pt-1 cursor-pointer hover:underline">
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
						onClick={() => setUserExists(false)}
					>
						Register
					</span>
				</div>
			</form>
		</div>
	);
};

export default SignIn;
