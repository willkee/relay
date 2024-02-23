import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ProfileFooter from "../footer/ProfileFooter";

const ServerContent = ({ activeServer }) => {
	const [currentServer, setCurrentServer] = useState(null);

	const servers = useSelector((state) => state.servers);
	useEffect(() => {
		setCurrentServer(servers[activeServer]);
	}, [activeServer, servers]);

	const tw = {
		container: "flex h-screen w-screen overflow-hidden",
		sb2: "h-12 drop-shadow-xl border-b border-discord-input-dark flex justify-center items-center",
		chat: "bg-discord-main-content-bg text-white flex-grow",
		channelHeader: "h-12 drop-shadow-sm border-b border-discord-input-dark",
	};
	return (
		<>
			{currentServer ? (
				<>
					<div className="w-60 bg-discord-sidebar-2">
						<div className={tw.sb2}>
							{/* <DirectMessages.Header /> */}
						</div>
						<div className="flex flex-col h-full items-center">
							<div className="w-full h-[calc(100%-100px)] flex flex-col items-center pt-2">
								{/* <DirectMessages.Channels /> */}
							</div>
							<ProfileFooter />
						</div>
					</div>
					<div className={tw.chat}>
						<div className={tw.channelHeader} />
					</div>
				</>
			) : (
				<div>Loading...</div>
			)}
		</>
	);
};

export default ServerContent;
