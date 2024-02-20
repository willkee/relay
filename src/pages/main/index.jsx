import { useState, useEffect } from "react";

import MainSidebar from "./sidebar/MainSidebar";
import ProfileFooter from "./footer/ProfileFooter";

import DirectMessages from "./content/DirectMessages";

const MainPage = () => {
	const [activeContent, setActiveContent] = useState("messages");

	useEffect(() => {
		return () => setActiveContent("messages");
	}, []);

	const tw = {
		container: "flex h-screen w-screen min-h-full",
		sb2: "h-12 drop-shadow-xl border-b border-discord-input-dark flex justify-center items-center",
		chat: "bg-discord-main-content-bg text-white flex-grow",
		channelHeader: "h-12 drop-shadow-sm border-b border-discord-input-dark",
	};

	return (
		<div className={tw.container}>
			<MainSidebar />
			<div className="w-60 bg-discord-sidebar-2">
				<div className={tw.sb2}>
					<DirectMessages.Header />
				</div>
				<div className="flex flex-col h-full items-center">
					<div className="w-full h-[calc(100%-100px)] flex flex-col items-center pt-2">
						<DirectMessages.Channels />
					</div>
					<ProfileFooter />
				</div>
			</div>
			<div className={tw.chat}>
				<div className={tw.channelHeader} />
			</div>
		</div>
	);
};

export default MainPage;
