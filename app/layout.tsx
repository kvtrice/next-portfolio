import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./Navbar";
import Footer from "./Footer";

export const metadata: Metadata = {
	title: "Kat Mountford | Software Engineer",
	description:
		"Kat Mountford is a Software Engineer passionate about building intuitive, user-centered applications. With a strong background in UX/UI design, she focuses on creating seamless, engaging experiences that make technology feel effortless and accessible.",
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
