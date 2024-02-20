import { useSelector } from "react-redux";
import SettingsIcon from "../icons/Settings";

import phoenix from "../../../assets/images/phoenix.jpg";

const ProfileFooter = () => {
	const { user } = useSelector((state) => state.session);

	return (
		<div className="absolute bottom-0 text-white h-[52px] bg-discord-profile w-[240px] flex items-center justify-between px-3">
			<div className="flex items-center">
				<div className="bg-green-900 rounded-full w-8 h-8 mr-2 flex items-center justify-center">
					<img className="rounded-full" src={phoenix} />
				</div>
				<div className="font-ggMedium text-discord-text-200">
					{user.displayName}
				</div>
			</div>
			<SettingsIcon />
		</div>
	);
};

export default ProfileFooter;
