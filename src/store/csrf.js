import Cookies from "js-cookie";

export async function csrfFetch(url, options = {}) {
	options.method = options.method || "GET";
	options.headers = options.headers || {};

	if (options.method.toUpperCase() !== "GET") {
		if (options.headers["Content-Type"] === "multipart/form-data") {
			delete options.headers["Content-Type"];
		} else {
			options.headers["Content-Type"] =
				options.headers["Content-Type"] || "application/json";
		}
		options.headers["XSRF-TOKEN"] = Cookies.get("XSRF-TOKEN");
	}
	const res = await window.fetch(url, options);

	if (res.status >= 400) {
		console.error("CSRF Fetch failed!", res);
		throw res;
	}
	return await res.json();
}

export async function restoreCSRF() {
	const res = await csrfFetch("/api/v1/csrf");
	Cookies.set("XSRF-TOKEN", res.csrfToken, {
		expires: 1,
		path: "/",
		sameSite: "lax",
		secure: import.meta.env.VITE_VERCEL_ENV === "production",
		httpOnly: import.meta.env.VITE_VERCEL_ENV === "production",
	});
}
