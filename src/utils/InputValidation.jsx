const ValidateEmail = (email) => {
	// Regular expression for a basic email validation
	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	return emailRegex.test(email);
};

const ValidatePassword = (password) => {
	// Regular expressions for password validation
	const hasUppercase = /[A-Z]/.test(password);
	const hasLowercase = /[a-z]/.test(password);
	const hasNumber = /\d/.test(password);
	const hasMinimumLength = password.length >= 8;

	// Check if all conditions are met
	return hasUppercase && hasLowercase && hasNumber && hasMinimumLength;
};

const ValidateUsername = (username) => {
	// Regular expressions for username validation
	const usernameRegex = /^[a-zA-Z0-9_.]*$/;
	return usernameRegex.test(username);
};

const ValidateAge = (dob) => {
	const { month, day, year } = dob;
	const birthDate = new Date(year, month, day);
	const currentDate = new Date();

	const age = currentDate.getFullYear() - birthDate.getFullYear();

	if (
		currentDate.getMonth() < birthDate.getMonth() ||
		(currentDate.getMonth() === birthDate.getMonth() &&
			currentDate.getDate() < birthDate.getDate())
	) {
		return age - 1 >= 13;
	}

	return age >= 13;
};

export { ValidateEmail, ValidatePassword, ValidateUsername, ValidateAge };
