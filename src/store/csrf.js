import axios from "axios";
import Cookies from "js-cookie";
import rootUrl from "./config";
export async function csrfFetch(url, options = {}) {
	options.method = options.method || "GET";
	options.headers = options.headers || {};

	if (options.method.toUpperCase() !== "GET") {
		options.headers["Content-Type"] = "application/json";
		options.headers["XSRF-Token"] = Cookies.get("XSRF-TOKEN");
		options.credentials = "include";
	}

	const res = await axios(url, options);

	if (res.status >= 400) {
		console.error("Axios request failed:", res);
		throw res;
	}
	return await res.data;
}

export async function restoreCSRF() {
	const token = Cookies.get("XSRF-TOKEN");

	const res = await axios({
		method: "GET",
		url: `${rootUrl}/api/v1/csrf`,
		credentials: "include",
		headers: { "XSRF-TOKEN": token },
	});

	Cookies.set("XSRF-TOKEN", res.data.csrfToken, {
		path: "/",
		sameSite: "lax",
	});
}
