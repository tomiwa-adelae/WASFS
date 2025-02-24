import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import Image from "next/image";
import { wasfsCredibility } from "@/constants";

const Showcase = ({
	title,
	description,
	buttons,
	image,
	extras,
}: {
	title: React.ReactNode;
	description: string;
	buttons: React.ReactNode;
	image: string;
	extras?: React.ReactNode;
}) => {
	return (
		<div
			style={{
				backgroundImage: `url(${image})`,
			}}
			className="min-h-screen text-white bg-no-repeat bg-center bg-cover bg-current flex items-center justify-start"
		>
			<div className="container pt-40 pb-10">
				<h1 className="uppercase text-4xl leading-relaxed md:text-5xl md:leading-relaxed lg:text-6xl lg:leading-normal font-bold lg:w-5/6">
					{title}
				</h1>
				<p className="text-gray-200 leading-loose text-sm md:text-base md:leading-loose lg:w-5/6 mt-4">
					{description}
				</p>
				<div className="flex items-center justify-start gap-4 md:gap-8 mt-8">
					{buttons}
				</div>
				{extras}
			</div>
		</div>
	);
};

export default Showcase;
