import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./Navbar";
import Footer from "./Footer";

export const metadata: Metadata = {
	title: "Katrice Mountford | Software Engineer",
	description:
		"Katrice Mountford is a Software Engineer passionate about crafting intuitive, user-friendly interfaces that make technology effortless to use. With a background in UX/UI Design, Product Management, and Software Engineering, she specializes in building engaging, accessible, and high-performing web experiences. She thrives on collaboration, design-driven development, and continuous learning to create seamless, impactful digital products.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html
			lang="en"
			data-theme=""
		>
			<body>
				<Navbar />
				{children}
				<Footer />
			</body>
		</html>
	);
}
