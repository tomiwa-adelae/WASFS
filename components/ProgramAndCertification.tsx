import React from "react";
import SectionHeader from "./shared/SectionHeader";
import Image from "next/image";
import { Separator } from "./ui/separator";
import { Button } from "./ui/button";
import Link from "next/link";
import { ourPrograms } from "@/constants";

const ProgramAndCertification = () => {
	return (
		<div className="bg-white pt-8 pb-16">
			<SectionHeader
				title={"Choose From Our World-Class Forensic Programs"}
				subTitle={"Programs & certifications"}
				description={
					"Explore our specialized certifications in fraud auditing, digital forensics, criminal investigations, and more. Learn online and earn a globally recognized qualification."
				}
			/>
			<div className="container">
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
					{ourPrograms.map(({ title, icon, description }, index) => (
						<div
							className="bg-[#F8F9FA] rounded-md shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]"
							key={index}
						>
							<Image
								src={"/assets/images/investigation-law-img.jpg"}
								alt={"Investigation law Image"}
								width={1000}
								height={1000}
								className="aspect-video object-cover w-auto h-auto rounded-t-md"
							/>
							<div className="px-6 py-8">
								<div className="flex gap-2 items-start justify-start mb-8">
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
								<Button className="w-full" size={"lg"} asChild>
									<Link href="/">Learn more</Link>
								</Button>
							</div>
						</div>
					))}
				</div>
				<div className="flex items-center justify-center gap-4 md:gap-8 mt-10">
					<Button className="w-full md:w-auto" size={"lg"} asChild>
						<Link href="/admissions">Apply now</Link>
					</Button>
					<Button
						className="w-full md:w-auto"
						variant={"black"}
						size={"lg"}
						asChild
					>
						<Link href="/our-programs">Explore our Programs</Link>
					</Button>
				</div>
			</div>
		</div>
	);
};

export default ProgramAndCertification;
