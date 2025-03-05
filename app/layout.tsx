import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./Navbar";
import Footer from "./Footer";

export const metadata: Metadata = {
	title: "Katrice Mountford | Product Manager",
	description:
		"Katrice Mountford is a Product Manager passionate about solving real customer problems and building products that deliver meaningful impact. With a background in Product Management, UX/UI Design, and Software Engineering, she specialises in translating user insights and business needs into clear, actionable solutions. She thrives on collaboration, data-driven decision-making, and agile execution to create intuitive, high-value products.",
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
