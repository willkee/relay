import { useState, useEffect } from "react";

const useRecaptcha = () => {
	const [token, setToken] = useState(null);
	const id = import.meta.env.VITE_RECAPTCHA_ID;

	useEffect(() => {
		window.grecaptcha &&
			window.grecaptcha.enterprise.ready(() => {
				window.grecaptcha.enterprise
					.execute(id, { action: "REGISTER" })
					.then((recaptchaToken) => {
						setToken(recaptchaToken);
					});
			});
	}, [id]);

	return token;
};

export { useRecaptcha };
