/* eslint-disable no-mixed-spaces-and-tabs */
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import logo from "../../../../assets/images/logo.png";
import phoenix from "../../../../assets/images/phoenix.jpg";
import ProfileBadges from "./ProfileBadges";

const ProfileCard = () => {
	const [showEmail, setShowEmail] = useState(false);
	const { user } = useSelector((state) => state.session);

	useEffect(() => {
		return () => setShowEmail(false);
	}, []);

	const cardData = [
		{ title: "DISPLAY NAME", data: user.displayName },
		{ title: "USERNAME", data: user.username },
		{ title: "EMAIL", data: user.email },
		{ title: "PHONE NUMBER", data: user.phoneNum },
	];

	return (
		<div className="w-[660px] rounded-md bg-discord-input-dark overflow-hidden">
			<div className="relative">
				<section
					id="profile_banner"
					className="absolute top-0 left-0 bg-gradient-to-br from-blue-800 to-black h-[100px] w-full"
				/>
				<div className="pl-[22px] pt-[82px]">
					<div
						id="profile_avatar"
						className="rounded-full h-[100px] w-[100px] bg-black absolute border-4 border-discord-input-dark flex items-center justify-center"
					>
						<img className="rounded-full" src={phoenix} />
						<div
							className="absolute bottom-0 right-0 bg-green-500 rounded-full w-6 h-6 m-2 border-[5px] border-discord-input-dark"
							style={{ transform: "translate(30%, 30%)" }}
						/>
					</div>
				</div>
				<div className="ml-[134px] mt-[36px] h-[60px] pr-[16px] flex justify-between">
					<div className="flex flex-col">
						<div className="text-white text-xl font-ggBold h-[30px]">
							{user.displayName}
						</div>
						<ProfileBadges />
					</div>
					<div className="bg-discord-button h-[32px] font-ggMedium text-white py-0.5 px-4 rounded-sm text-sm flex items-center cursor-pointer hover:bg-discord-button-hover">
						Edit User Profile
					</div>
				</div>

				<div className="p-4 m-4 bg-discord-sidebar-2 rounded-md h-[265px]">
					{cardData.map((item) => (
						<div
							key={item.title}
							className="h-[40px] mb-6 flex items-center justify-between"
						>
							<div className="h-full flex flex-col justify-between">
								<div className="text-xs font-ggBold text-discord-text-200">
									{item.title}
								</div>
								<div className="font-ggMedium text-discord-text-100">
									{item.data ? (
										<>
											{item.title === "EMAIL" ? (
												<>
													<span>
														{showEmail
															? item.data
															: `${"*".repeat(
																	item.data.split(
																		"@"
																	)[0].length
															  )}@${
																	item.data.split(
																		"@"
																	)[1]
															  }`}
													</span>
													<span
														className="text-discord-link-text text-sm ml-1 cursor-pointer hover:underline"
														onClick={() =>
															setShowEmail(
																!showEmail
															)
														}
													>
														{showEmail
															? "Hide"
															: "Reveal"}
													</span>
												</>
											) : (
												<span>{item.data}</span>
											)}
										</>
									) : (
										<span className="text-discord-100">
											None
										</span>
									)}
								</div>
							</div>
							<div
								type="button"
								className="h-[32px] w-[60px] bg-button-gray rounded flex items-center justify-center text-discord-text-100 font-ggMedium text-sm cursor-pointer hover:bg-button-gray-hover transition duration-100 ease-in-out"
							>
								Edit
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default ProfileCard;
