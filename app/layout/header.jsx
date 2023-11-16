"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	return (
		<>
			<header className="sticky top-0 z-10 flex w-full items-center justify-between py-8 px-4 lg:px-48 bg-[#292929]">
				<Link
					href="/"
					className="text-2xl">
					Pro<span className="text-[#FF621E]">SST</span>
				</Link>
				<div className="hidden lg:flex items-center gap-5">
					<a
						className="text-2xl font-semibold"
						href="">
						Nav-Punkt
					</a>
					<a
						className="text-2xl font-semibold"
						href="">
						Nav-Punkt
					</a>
					<a
						className="text-2xl font-semibold"
						href="">
						Nav-Punkt
					</a>
					<a
						className="text-2xl font-semibold"
						href="">
						Nav-Punkt
					</a>
				</div>
				<div
					className="lg:hidden"
					onClick={toggleMenu}>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="h-6 w-6 text-white cursor-pointer"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor">
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={2}
							d="M4 6h16M4 12h16M4 18h16"
						/>
					</svg>
				</div>
			</header>
			{isMenuOpen && (
				<div className="lg:hidden">
					<ul className="bg-[#202020]">
						<li className="text-white py-2 px-4">Nav-Punkt</li>
						<li className="text-white py-2 px-4">Nav-Punkt</li>
						<li className="text-white py-2 px-4">Nav-Punkt</li>
						<li className="text-white py-2 px-4">Nav-Punkt</li>
					</ul>
				</div>
			)}
		</>
	);
}
