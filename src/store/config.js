let rootUrl;

if (import.meta.env.VITE_VERCEL_ENV === "development") {
	rootUrl = "http://localhost:5001/relay-discord/us-central1/default";
} else if (import.meta.env.VITE_VERCEL_ENV === "production") {
	rootUrl = "https://relay-discord.web.app";
} else {
	rootUrl = "http://localhost:5000";
}

export default rootUrl;
