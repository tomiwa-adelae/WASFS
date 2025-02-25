import SectionHeader from "./shared/SectionHeader";
import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";
import HighLightBoxes from "./HighLightBoxes";

const AboutWASFS = () => {
	return (
		<div className="bg-white pb-16">
			<div className="grid grid-cols-1 md:grid-cols-2 md:gap-4 overflow-hidden ">
				<Image
					src={"/assets/images/magnifying-glass.jpg"}
					alt={"Magnifying glass over an analytics"}
					width={1000}
					height={1000}
					className="aspect-video md:aspect-square w-auto h-full object-cover hover:scale-105 transition-all"
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
			<HighLightBoxes />
		</div>
	);
};

export default AboutWASFS;
