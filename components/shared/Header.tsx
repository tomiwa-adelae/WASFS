import Image from "next/image";
import Link from "next/link";
import React from "react";
import { MobileNavbar } from "./MobileNavbar";
import { navLinks } from "@/constants";

const Header = () => {
	return (
		<header className="bg-white py-4 border-b border-primary">
			<div className="container flex items-center justify-between gap-8">
				<Link href="/">
					<Image
						src={"/assets/images/wasfs-logo.png"}
						alt={"WASFS logo"}
						width={1000}
						height={1000}
						className="w-[250px] md:w-[280px] lg:w-[350px] object-cover h-full"
					/>
				</Link>
				<div>
					<nav className="hidden lg:flex items-center justify-center gap-8">
						{navLinks.map(({ slug, title }, index) => (
							<Link
								className="uppercase text-[13px] hover:text-primary font-medium transition-all"
								href={slug}
								key={index}
							>
								{title}
							</Link>
						))}
					</nav>
					<div className="lg:hidden">
						<MobileNavbar />
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
