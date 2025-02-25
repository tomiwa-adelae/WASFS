import SectionHeader from "./shared/SectionHeader";

import Programs from "./Programs";
import Link from "next/link";
import { Button } from "./ui/button";

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
			<div className="mt-8">
				<Programs />
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
	);
};

export default ProgramAndCertification;
