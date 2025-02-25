import SectionHeader from "./shared/SectionHeader";
import Image from "next/image";

const WhoWeAre = () => {
	return (
		<div className="bg-white grid grid-cols-1 md:grid-cols-5 overflow-hidden">
			<Image
				src={"/assets/images/who-we-are.jpg"}
				alt={"3 people examining a scene of a crime"}
				width={1000}
				height={1000}
				className="aspect-video w-auto h-full object-cover order-2 md:order-1 col-span-2 hover:scale-105 transition-all"
			/>
			<div className="flex items-center justify-center flex-col py-16 order-1 md:order-2 col-span-3">
				<SectionHeader
					title={"Who we are"}
					subTitle={"About us"}
					description={
						"The West African School of Forensic Studies (WASFS) is a premier institution dedicated to equipping professionals with top-tier forensic expertise. We offer globally recognized certifications in fraud auditing, digital forensics, criminal investigations, and forensic accounting, empowering individuals and organizations to uphold justice and integrity."
					}
					position="right"
				/>
				<div className="container mt-4">
					<p
						className={`leading-loose text-sm lg:text-base lg:leading-loose`}
					>
						Founded to address the growing need for skilled forensic
						professionals in Africa and beyond, WASFS is committed
						to providing high-quality education through expert-led
						training and real-world case studies. Our programs
						bridge the gap between theoretical knowledge and
						practical forensic application, ensuring our graduates
						are industry-ready.
					</p>
				</div>
			</div>
		</div>
	);
};

export default WhoWeAre;
