import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import Image from "next/image";
import { wasfsCredibility, SHOWCASE_VIDEO } from "@/constants";

const Showcase = ({
	title,
	description,
	buttons,
	image,
	extras,
}: {
	title: React.ReactNode;
	description: React.ReactNode;
	buttons: React.ReactNode;
	image: string;
	extras?: React.ReactNode;
}) => {
	return (
		<div
			className={`flex items-center justify-center bg-no-repeat bg-center bg-cover relative text-white`}
		>
			<video
				autoPlay
				loop
				muted
				playsInline
				className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
			>
				<source src={SHOWCASE_VIDEO} type="video/mp4" />
			</video>
			<div className={`container z-50`}>
				<div className="pt-40 pb-10 z-10">
					<h1 className="uppercase text-4xl leading-relaxed md:text-5xl md:leading-relaxed lg:text-6xl lg:leading-normal font-bold lg:w-5/6">
						{title}
					</h1>
					<div className="text-gray-200 leading-loose text-sm md:text-base md:leading-loose lg:w-5/6 mt-4">
						{description}
					</div>
					<div className="flex items-center justify-start gap-4 md:gap-8 mt-8">
						{buttons}
					</div>
					{extras}
				</div>
			</div>
			<div className="absolute top-0 bottom-0 left-0 right-0 inset-0 bg-black/50 transition-all duration-1000 h-full" />
			<div className="absolute inset-0 bg-black/30" />
		</div>
	);
};

export default Showcase;
