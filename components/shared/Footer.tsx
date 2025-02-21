import { footerLinks, socialLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
	const year = new Date().getFullYear();
	return (
		<footer className="bg-primary text-white py-8 lg:pt-12">
			<div className="container">
				<div className="hidden text-xs font-medium md:grid grid-cols-3 mb-10">
					{footerLinks.map((links, index) => (
						<div key={index} className="space-y-6 flex flex-col">
							{links.links.map(({ title, slug }, index) => (
								<Link key={index} href={slug}>
									{title}
								</Link>
							))}
						</div>
					))}
					<div className="space-y-6 flex flex-col">
						{socialLinks.map(({ icon, name, slug }, index) => (
							<a
								href={slug}
								target="_blank"
								key={index}
								className="flex items-center justify-start gap-4 group"
							>
								<Image
									src={icon}
									alt={`${name} icon`}
									width={1000}
									height={1000}
									className="w-[20px] h-[20px]"
								/>
								<p className="text-xs uppercase font-medium transition-all">
									{name}
								</p>
							</a>
						))}
					</div>
				</div>
				<div>
					<p className="text-xs font-medium uppercase">
						&copy; West Africa School of Forensic Studies {year}
					</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
