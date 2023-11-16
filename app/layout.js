import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "ProSST - Pro Server Side Tracking",
	description: "Pro Server Side Tracking - Created by Vo-Hoang-Tuan Ngo",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={inter.className}>{children}</body>
		</html>
	);
}
