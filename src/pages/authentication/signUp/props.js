const SelectProps = {
	isClearable: false,
	className: "w-full ml-3",
	components: { IndicatorSeparator: () => null },
	styles: {
		control: (styles) => ({
			...styles,
			backgroundColor: "#1E1F22",
			border: "none",
			color: "#FFF",
		}),
		option: (styles, { isDisabled, isFocused }) => {
			return {
				...styles,
				backgroundColor: isFocused ? "#424549" : "#1E1F22",
				color: isDisabled ? "#555" : "#FFF",
				cursor: isDisabled ? "not-allowed" : "default",
			};
		},
		singleValue: (styles) => ({
			...styles,
			color: "#FFF",
		}),
		menu: (styles) => ({
			...styles,
			backgroundColor: "#1E1F22",
		}),
	},
};

export default SelectProps;
