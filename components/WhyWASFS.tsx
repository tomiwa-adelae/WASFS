import React from "react";
import SectionHeader from "./shared/SectionHeader";
import { Button } from "./ui/button";
import Link from "next/link";
import Image from "next/image";
import { whyWASFS } from "@/constants";

const WhyWASFS = () => {
	return (
		<div className="bg-primary text-white grid grid-cols-1 md:grid-cols-2 md:gap-4 overflow-hidden">
			<div className="flex items-center justify-center flex-col py-12 lg:py-16">
				<SectionHeader
					title={"Your Gateway to a Successful Forensic Career!"}
					color={"white"}
					subTitle={"Why WASFS"}
					description={
						"Join a globally recognized forensic institution and gain expert-led training that prepares you for real-world investigations."
					}
					position="left"
				/>
				<div className="grid gap-6 mt-8 container">
					{whyWASFS.map(({ why, icon }, index) => (
						<div
							className="flex items-start justify-start gap-2"
							key={index}
						>
							<Image
								src={icon}
								alt={why}
								width={1000}
								height={1000}
								className="w-[20px] h-[20px]"
							/>
							<p className="text-xs md:text-sm italic font-medium leading-relaxed">
								{why}
							</p>
						</div>
					))}
				</div>
				<div className="container mt-8">
					<Button variant={"secondary"} size={"lg"} asChild>
						<Link href="/admissions">Start learning today</Link>
					</Button>
				</div>
			</div>
			<Image
				src={"/assets/images/magnifying-glass.jpg"}
				alt={"Magnifying glass over an analytics"}
				width={1000}
				height={1000}
				className="aspect-video md:aspect-square w-auto h-full object-cover hover:scale-105 transition-all"
			/>
		</div>
	);
};

export default WhyWASFS;
