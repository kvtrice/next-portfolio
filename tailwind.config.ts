import type { Config } from "tailwindcss";

const config: Config = {
	darkMode: ["selector", '[data-mode="dark"]'],
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
					"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
			fontFamily: {
				heading: ["Bricolage Grotesque", "sans-serif"],
				body: ["Poppins", "sans-serif"],
			},
			colors: {
				highlight: "#FFF7D0",
				pink: "#FFD6FF",
				purple: "#C8B6FF",
				blue: "#BBD0FF",
				darkpink: "#3D003D",
				darkpurple: "#24003D",
				darkblue: "#000D29",
				black: "#000",
				white: "#FEFEFE",
			},
		},
	},
	plugins: [],
};

export default config;
