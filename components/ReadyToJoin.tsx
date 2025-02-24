import { wasfsCredibility } from "@/constants";
import SectionHeader from "./shared/SectionHeader";
import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";

const ReadyToJoin = () => {
	return (
		<div className="bg-white">
			<div className="grid grid-cols-1 md:grid-cols-5">
				<div className="flex items-center justify-center flex-col py-16 col-span-3">
					<SectionHeader
						title={"Ready to Join?"}
						subTitle={"Take the next step"}
						description={
							"Become part of a globally recognized institution and gain the skills you need to excel in forensic auditing, criminal investigations, and digital forensics. With expert-led training, flexible online learning, and career-boosting certifications, WASFS is the perfect place to start or advance your forensic career."
						}
						position="right"
					/>
					<div className="container mt-8 flex items-center justify-start gap-4 md:gap-8">
						<Button
							className="w-full md:w-auto"
							size={"lg"}
							asChild
						>
							<Link href="/admissions">Enrol now</Link>
						</Button>
						<Button
							className="w-full md:w-auto"
							variant={"black"}
							size={"lg"}
							asChild
						>
							<Link href="/contact">Contact us</Link>
						</Button>
					</div>
					<div className="container mt-8 grid gap-4">
						{wasfsCredibility.map((credibility, index) => (
							<div
								className="flex items-start justify-start gap-2"
								key={index}
							>
								<Image
									src={"/assets/icons/check-black.svg"}
									alt={"Check Icon"}
									width={1000}
									height={1000}
									className="w-[20px] h-[20px]"
								/>
								<p className="text-sm font-medium italic leading-relaxed">
									{credibility}
								</p>
							</div>
						))}
					</div>
				</div>
				<Image
					src={"/assets/images/certificate.jpg"}
					alt={"A hand holding a certificate"}
					width={1000}
					height={1000}
					className="aspect-video w-auto h-full object-cover col-span-2"
				/>
			</div>
		</div>
	);
};

export default ReadyToJoin;
