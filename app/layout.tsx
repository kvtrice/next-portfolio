import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./Navbar";
import Footer from "./Footer";

export const metadata: Metadata = {
	title: "Katrice Mountford | Product Owner & Business Analyst",
	description:
		"KKatrice Mountford is a Product Owner & Business Analyst with a background in Software Engineering, UX/UI Design, and Product Management. She specialises in translating business needs and user insights into structured, actionable solutions, ensuring seamless collaboration between stakeholders and technical teams. Passionate about creating intuitive, user-centered experiences, she focuses on delivering well-defined, impactful solutions that drive real business value.",
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
