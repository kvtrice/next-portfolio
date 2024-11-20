import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./Navbar";
import Footer from "./Footer";

export const metadata: Metadata = {
	title: "Kat Mountford | Product Manager",
	description:
		"Kat Mountford is a Product Manager with experience across the full product life cycle, Full Stack Development & UX / UI Design. She's a multi-skilled professional passionate about using technology to create impactful solutions and deliver great user experiences.",
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
