import { MyPagination } from "@/components/MyPagination";
import Programs from "@/components/Programs";
import ReadyToJoin from "@/components/ReadyToJoin";
import SearchPrograms from "@/components/SearchPrograms";
import Showcase from "@/components/shared/Showcase";
import { Button } from "@/components/ui/button";
import WhyChooseWASFS from "@/components/WhyChooseWASFS";
import Link from "next/link";

const page = () => {
	return (
		<div>
			<Showcase
				title={
					<>
						Explore Our Forensic{" "}
						<span className="text-primary">
							Programs & Certifications
						</span>
					</>
				}
				description="Advance your career with expert-led forensic training in fraud auditing, digital forensics, criminal investigations, and more. Enroll today and gain a globally recognized certification!"
				buttons={
					<>
						<Button
							className="w-full md:w-auto"
							size={"lg"}
							asChild
						>
							<Link href="/our-programs">
								View program & enroll
							</Link>
						</Button>
					</>
				}
				image="/assets/images/magnifying-glass.jpg"
			/>
			<SearchPrograms />
			<Programs />
			<MyPagination />
			<WhyChooseWASFS />
			<ReadyToJoin />
		</div>
	);
};

export default page;
