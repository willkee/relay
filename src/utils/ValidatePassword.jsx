const ValidatePassword = (password) => {
	// Regular expressions for password validation
	const hasUppercase = /[A-Z]/.test(password);
	const hasLowercase = /[a-z]/.test(password);
	const hasNumber = /\d/.test(password);
	const hasMinimumLength = password.length >= 8;

	// Check if all conditions are met
	return hasUppercase && hasLowercase && hasNumber && hasMinimumLength;
};

export default ValidatePassword;
