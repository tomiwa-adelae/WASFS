"use client";

import { testimonies } from "@/constants";
import SectionHeader from "./shared/SectionHeader";
import { Carousel } from "./ui/carousel";

const Testimonials = () => {
	return (
		<div className="bg-white pt-16">
			<SectionHeader
				title={"Hear From Our Graduates"}
				subTitle={"Success Stories"}
				description={
					"Our students have gone on to secure jobs in law enforcement, financial institutions, and investigative agencies worldwide. Read their inspiring stories!"
				}
			/>
			<div className="relative overflow-x-hidden w-full pb-36 lg:pb-20 h-full pt-14">
				<Carousel slides={testimonies} />
			</div>
		</div>
	);
};

export default Testimonials;
