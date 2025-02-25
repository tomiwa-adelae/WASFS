import CourseDetails from "@/components/CourseDetails";
import FAQs from "@/components/FAQs";
import Showcase from "@/components/shared/Showcase";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";

const page = () => {
	return (
		<div>
			<Showcase
				title={
					<>
						Fraud Auditing & Forensic Accounting{" "}
						<span className="text-primary">(FAFA)</span>
					</>
				}
				description="Master forensic accounting techniques to detect, investigate, and prevent financial fraud. Learn from industry experts and gain a globally recognized certification."
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
				image="/assets/images/magnifying-glass.jpg"
			/>
			<CourseDetails />
			<Separator className="container" />
			<FAQs />
		</div>
	);
};

export default page;
