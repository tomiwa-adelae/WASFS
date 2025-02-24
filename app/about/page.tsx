import CoreValues from "@/components/CoreValues";
import MeetFaculty from "@/components/MeetFaculty";
import OurMission from "@/components/OurMission";
import ReadyToJoin from "@/components/ReadyToJoin";
import Showcase from "@/components/shared/Showcase";
import { Button } from "@/components/ui/button";
import WhoWeAre from "@/components/WhoWeAre";
import WhoWeServe from "@/components/WhoWeServe";
import WhyChooseWASFS from "@/components/WhyChooseWASFS";
import Link from "next/link";

const page = () => {
	return (
		<div>
			<Showcase
				title={
					<>
						About <span className="text-primary">WASFS</span>
					</>
				}
				description="The West African School of Forensic Studies (WASFS) is a leading institution dedicated to training professionals in fraud auditing, criminal investigations, and digital forensics. Our globally recognized certifications prepare students for real-world forensic challenges."
				buttons={
					<>
						<Button
							className="w-full md:w-auto"
							size={"lg"}
							asChild
						>
							<Link href="/our-programs">
								Explore our Programs
							</Link>
						</Button>
					</>
				}
				image="/assets/images/about-showcase-img.jpg"
			/>
			<WhoWeAre />
			<WhoWeServe />
			<OurMission />
			<CoreValues />
			<MeetFaculty />
			<WhyChooseWASFS />
			<ReadyToJoin />
		</div>
	);
};

export default page;
