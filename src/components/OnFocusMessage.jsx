const OnFocusMessage = ({ currentFocus, target, message, type }) => {
	return (
		<div className="relative">
			<p
				className={`text-sm pt-0.5 opacity-0 transition-opacity duration-300 ${
					currentFocus === target ? "opacity-100" : "absolute"
				} ${
					type === "error" ? "text-red-500" : "text-discord-text-100"
				}`}
			>
				{message}
			</p>
		</div>
	);
};

export default OnFocusMessage;
