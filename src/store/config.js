let rootUrl;

if (import.meta.env.VITE_VERCEL_URL === "development") {
	rootUrl = "http://localhost:5000";
} else if (import.meta.env.VITE_VERCEL_URL === "production") {
	rootUrl = "https://relay-discord.web.app";
} else {
	rootUrl = "http://localhost:5000";
}

export default rootUrl;
