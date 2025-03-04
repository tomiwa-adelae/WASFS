import CourseDetails from "@/components/CourseDetails";
import FAQs from "@/components/FAQs";
import Showcase from "@/components/shared/Showcase";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";

import type { Metadata } from "next";
import { ourPrograms } from "@/constants/Programs";
import React, { Fragment } from "react";

export const metadata: Metadata = {
	title: "Accredited Forensic Certification | WASFS",
	description:
		" Enroll in programs at WASFS and gain industry-recognized forensic expertise in [course focus]. Learn from experts and get certified in forensic science.",
	keywords:
		"forensic certification, forensic accounting diploma, fraud auditing course, cybercrime investigation certification, forensic investigation training, wasfs, prof akinteye ademola, ademola, akinteye, simon akinteye, about",
};

const page = () => {
	const program = ourPrograms[0];
	return (
		<div>
			<Showcase
				title={
					<>
						{program.title}{" "}
						<span className="text-primary">
							({program.abbreviation})
						</span>
					</>
				}
				description={
					<p className="line-clamp-3">{program.description}</p>
				}
				buttons={
					<>
						<Button
							className="w-full md:w-auto"
							size={"lg"}
							asChild
						>
							<Link href="/our-programs">Enroll now</Link>
						</Button>
					</>
				}
				image={program.image}
			/>
			<CourseDetails details={program} />
			<Separator className="container" />
			<FAQs />
		</div>
	);
};

export default page;
