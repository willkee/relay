const OnFocusMessage = ({ currentFocus, target, message }) => {
	return (
		<div className="relative">
			<p
				className={`text-sm pt-0.5 opacity-0 transition-opacity duration-300 ${
					currentFocus === target ? "opacity-100" : "absolute"
				}`}
			>
				{message}
			</p>
		</div>
	);
};

export default OnFocusMessage;
