const ValidateEmail = (email) => {
	// Regular expression for a basic email validation
	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	return emailRegex.test(email);
};

export default ValidateEmail;
