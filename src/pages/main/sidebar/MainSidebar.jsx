import logo from "../../../assets/images/logo.png";
const MainSidebar = () => {
	return (
		<div className="w-[72px] bg-discord-input-dark h-full text-white p-3 flex flex-col items-center">
			<div className="rounded-xl w-full h-12 bg-discord-button p-2 cursor-pointer">
				<img
					className="bg-discord-button"
					src={logo}
					alt="Relay logo"
				/>
			</div>
			<div className="w-8 h-0.5 bg-discord-divider my-3 flex" />
		</div>
	);
};

export default MainSidebar;
