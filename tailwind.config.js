/** @type {import('tailwindcss').Config} */

// eslint-disable-next-line no-undef
const defaultTheme = require("tailwindcss/defaultTheme");

export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			width: {
				480: "480px",
			},
			fontFamily: {
				sans: ["GGRegular"],
				ggBold: ["GGBold"],
				ggMedium: ["GGMedium"],
			},
			colors: {
				primary: "#313338",
				"discord-100": "#424549",
				"discord-200": "#36393e",
				"discord-300": "#282b30",
				"discord-400": "#1e2124",
				"discord-button": "#5865f2",
				"discord-button-hover": "#4B56D0",
				"discord-input": "#E8F0FE",
				"discord-input-dark": "#1E1F22",
				"discord-link-text": "#00A8FC",
				"discord-text-100": "#F2F3F5",
				"discord-text-200": "#B5BAC1",
				"discord-text-300": "#949BA4",
				"discord-red": "#F23F42",
				"discord-sidebar-2": "#2B2D31",
				"discord-main-content-bg": "#313338",
				"discord-divider": "#35363C",
				"discord-profile": "#232428",
				"discord-settings-item": "#3F4248",
				"danger-btn": "#DA363C",
				"danger-hover": "#981c20",
				"button-gray": "#4E5058",
				"button-gray-hover": "#7f828d",
			},
			// buttons , 14% black opacity hover
			backgroundImage: {
				welcome: "url('/src/assets/images/welcome-background.jpg')",
			},
			animation: {
				wiggle: "wiggle 1s ease-in-out infinite",
			},
			transitionTimingFunction: {
				"custom-in": "cubic-bezier(0.4, 0, 0.2, 1)",
			},
		},
		screens: {
			mobile: "0px",
			...defaultTheme.screens,
			sm: "486px",
		},
	},
	plugins: [],
};
