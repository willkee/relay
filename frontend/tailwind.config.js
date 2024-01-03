/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{ts,js,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				primary: "#313338",
				"discord-100": "#424549",
				"discord-200": "#36393e",
				"discord-300": "#282b30",
				"discord-400": "#1e2124",
				"discord-button": "#5865f2",
				"discord-input": "#E8F0FE",
				"discord-link-text": "#00A8FC",
				"discord-text-100": "#F2F3F5",
				"discord-text-200": "#B5BAC1",
				"discord-text-300": "#9299A1",
			},
		},
	},
	plugins: [],
};
