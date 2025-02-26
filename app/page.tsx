import Showcase from "@/components/shared/Showcase";
import AboutWASFS from "@/components/AboutWASFS";
import ProgramAndCertification from "@/components/ProgramAndCertification";
import WhyWASFS from "@/components/WhyWASFS";
import Testimonials from "@/components/Testimonials";
import SectionHeader from "@/components/shared/SectionHeader";
import ContactDetails from "@/components/ContactDetails";
import ContactForm from "@/components/forms/ContactForm";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { wasfsCredibility } from "@/constants";
import Image from "next/image";

const page = () => {
	return (
		<div>
			<Showcase
				title={
					<>
						Learn, Certify and{" "}
						<span className="text-primary">Advance</span> your
						Career
					</>
				}
				description="Gain globally recognized forensic certifications in Fraud
					Auditing, Digital Forensics, Criminal Investigation, and
					more. Mastering the art of Forensic investigations and your
					journey to success starts now!"
				buttons={
					<>
						<Button
							className="w-full md:w-auto"
							size={"lg"}
							asChild
						>
							<Link href="/admissions">Apply now</Link>
						</Button>
						<Button
							className="w-full md:w-auto"
							variant={"secondary"}
							size={"lg"}
							asChild
						>
							<Link href="/our-programs">
								Explore our Programs
							</Link>
						</Button>
					</>
				}
				image="/assets/images/home-showcase-img.jpg"
				extras={
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
				}
			/>
			<AboutWASFS />
			<ProgramAndCertification />
			<WhyWASFS />
			<Testimonials />
			<div className="bg-white py-16">
				<SectionHeader
					title={"Get in Touch With Us!"}
					subTitle={"Have Questions?"}
					description={
						"Our team is ready to assist you with enrollment, course information, and any other inquiries. Contact us today!"
					}
				/>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 container pt-8">
					<ContactDetails />
					<ContactForm />
				</div>
			</div>
		</div>
	);
};

export default page;
