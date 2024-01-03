import FormLabel from "./components/FormLabel";

function App() {
	// buttons , 14% black opacity hover

	const handleSubmit = (e) => {
		e.preventDefault();
	};
	return (
		<div className="bg-welcome w-[100vw] h-full min-w-screen min-h-screen bg-cover bg-center font-sans flex justify-center items-center">
			<div className="bg-primary w-[480px] text-white rounded-md shadow-md">
				<form onSubmit={handleSubmit} className="p-8">
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
						<p className="font-ggMedium text-discord-link-text text-sm pt-1">
							Forgot your password?
						</p>
					</section>
					<button className="mt-5 font-ggMedium bg-discord-button w-full rounded-sm outline-none border-none focus:outline-none hover:bg-discord-button-hover">
						Log In
					</button>
				</form>
			</div>
		</div>
	);
}

export default App;
