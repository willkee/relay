const errorMessages = {
	email: {
		none: "Email is required.",
		invalid: "Invalid email address.",
	},
	username: {
		none: "Username is required.",
		invalid:
			"Please only use numbers, letters, underscores _ , or periods.",
	},
	password: {
		none: "Password is required.",
		invalid:
			"8+ characters, mix of upper/lowercase, and at least 1 number.",
	},
	dob: {
		invalid: "You must be 13+ years old to register.",
	},
};

export function handleErr(field, type, state) {
	const { setFormData } = state;
	// setCurrentFocus(field);

	setFormData((prev) => ({ ...prev, focus: field }));
	setFormData((prev) => ({
		...prev,
		errors: { ...prev.errors, [field]: errorMessages[field][type] },
	}));
	return errorMessages[field][type];
}
