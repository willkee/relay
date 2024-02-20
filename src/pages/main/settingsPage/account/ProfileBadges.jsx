import developer from "../../../../assets/images/relay-developer.gif";
import bug_hunter from "../../../../assets/images/gold-bug-hunter.gif";

const ProfileBadges = () => {
	return (
		<div className="h-[30px] py-1 flex">
			<img src={developer} className="h-5 w-5 mr-1" />
			<img src={bug_hunter} className="h-5 w-5 mr-1" />
		</div>
	);
};

export default ProfileBadges;
