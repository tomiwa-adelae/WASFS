import SectionHeader from "./shared/SectionHeader";
import Image from "next/image";

const OurMission = () => {
	return (
		<div className="bg-white grid grid-cols-1 md:grid-cols-7 overflow-hidden">
			<Image
				src={"/assets/images/magnifying-glass.jpg"}
				alt={"3 people examining a scene of a crime"}
				width={1000}
				height={1000}
				className="aspect-video w-auto h-full object-cover order-2 md:order-1 col-span-3 hover:scale-105 transition-all"
			/>
			<div className="flex items-center justify-center flex-col py-16 order-1 md:order-2 col-span-4">
				<SectionHeader
					title={"Our Mission"}
					subTitle={"What drives us"}
					description={
						"To provide world-class forensic education that equips professionals with the expertise to detect fraud, conduct investigations, and uphold justice. Through innovative learning, real-world case studies, and global accreditation, we aim to bridge the knowledge gap in forensic studies across Africa and beyond."
					}
					position="right"
				/>
			</div>
		</div>
	);
};

export default OurMission;
