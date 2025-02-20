import React from "react";
import SectionHeader from "./shared/SectionHeader";
import Image from "next/image";
import { aboutHighlights } from "@/constants";
import { Button } from "./ui/button";
import Link from "next/link";

const AboutWASFS = () => {
	return (
		<div className="bg-white pb-16">
			<div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
				<Image
					src={"/assets/images/magnifying-glass.jpg"}
					alt={"Magnifying glass over an analytics"}
					width={1000}
					height={1000}
					className="aspect-square w-auto h-auto object-cover"
				/>
				<div className="flex items-center justify-center flex-col py-10">
					<SectionHeader
						title={"Shaping the Future of Forensic Professionals"}
						subTitle={"About WASFS"}
						description={
							"The West African School of Forensic Studies (WASFS) is a leading institution providing forensic training in Africa. We specialize in Fraud Auditing, Digital Forensics, Criminal Investigations, and more—helping professionals gain globally recognized certifications."
						}
						position="right"
					/>
					<div className="container mt-8">
						<Button size={"lg"} asChild>
							<Link href="/about">Learn more</Link>
						</Button>
					</div>
				</div>
			</div>
			<div className="container">
				<div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
					{aboutHighlights.map(
						({ icon, title, description }, index) => (
							<div
								className="bg-[#F8F9FA] rounded-md flex gap-2 items-start justify-start shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)] px-6 py-10"
								key={index}
							>
								<Image
									src={icon}
									alt={title}
									width={1000}
									height={1000}
									className="w-[50px] h-[50px]"
								/>
								<div>
									<h4 className="text-blue-400 uppercase text-base font-semibold">
										{title}
									</h4>
									<p className="text-sm mt-2 leading-loose">
										{description}
									</p>
								</div>
							</div>
						)
					)}
				</div>
			</div>
		</div>
	);
};

export default AboutWASFS;
