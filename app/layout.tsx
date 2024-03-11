import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./Navbar";
import Footer from "./Footer";

export const metadata: Metadata = {
	title: "Kat Mountford | Software Engineer",
	description:
		"Kat Mountford is a Software Engineer with a flair for the front end and building great user experiences.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body>
				<Navbar />
				{children}
				<Footer />
			</body>
		</html>
	);
}
