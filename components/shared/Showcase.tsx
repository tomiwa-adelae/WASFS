import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import Image from "next/image";
import { wasfsCredibility } from "@/constants";

const Showcase = () => {
	return (
		<div
			style={{
				backgroundImage: `url(/assets/images/home-showcase-img.jpg)`,
			}}
			className="min-h-screen text-white bg-no-repeat bg-center bg-cover bg-current flex items-center justify-start"
		>
			<div className="container pt-40 pb-10">
				<h1 className="uppercase text-4xl leading-relaxed md:text-5xl md:leading-relaxed lg:text-6xl lg:leading-normal font-bold lg:w-5/6">
					Learn, Certify and{" "}
					<span className="text-primary">Advance</span> Your Career
				</h1>
				<p className="text-gray-200 leading-loose text-sm md:text-base md:leading-loose lg:w-5/6 mt-4">
					Gain globally recognized forensic certifications in Fraud
					Auditing, Digital Forensics, Criminal Investigation, and
					more. Mastering the art of Forensic investigations and your
					journey to success starts now!
				</p>
				<div className="flex items-center justify-start gap-4 md:gap-8 mt-8">
					<Button className="w-full md:w-auto" size={"lg"} asChild>
						<Link href="/admissions">Apply now</Link>
					</Button>
					<Button
						className="w-full md:w-auto"
						variant={"secondary"}
						size={"lg"}
						asChild
					>
						<Link href="/our-programs">Explore our Programs</Link>
					</Button>
				</div>
				<div className="grid gap-4 mt-8">
					{wasfsCredibility.map((credibility, index) => (
						<div
							className="flex items-start justify-start gap-2"
							key={index}
						>
							<Image
								src={"/assets/icons/check.svg"}
								alt={"Check Icon"}
								width={1000}
								height={1000}
								className="w-[20px] h-[20px]"
							/>
							<p className="text-xs md:text-sm italic leading-relaxed">
								{credibility}
							</p>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Showcase;
