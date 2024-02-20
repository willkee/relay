import ListCard from "../../../components/ListCard";
import FriendsIcon from "../icons/Friends";
import ShopIcon from "../icons/Shop";

const DirectMessages = ({ children }) => {
	return <>{children}</>;
};

const Header = () => (
	<div>
		<div className="font-ggMedium text-discord-text-300 text-sm w-[220px] h-7 px-1.5 py-px bg-discord-input-dark text-center flex items-center rounded-sm">
			Find or start a conversation
		</div>
	</div>
);
const Channels = () => (
	<>
		<ListCard icon={<FriendsIcon />} text="Friends" />
		<ListCard icon={<ShopIcon />} text="Shop" />
		<div className="text-xs text-discord-text-300 font-ggBold pt-5 pl-[18px] flex justify-start items-start w-full">
			DIRECT MESSAGES
		</div>
	</>
);

DirectMessages.Header = Header;
DirectMessages.Channels = Channels;

export default DirectMessages;
