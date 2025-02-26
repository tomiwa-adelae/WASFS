import SectionHeader from "./shared/SectionHeader";
import Image from "next/image";
import { faculties } from "@/constants";
import { GlowingEffect } from "./ui/glowing-effect";

const MeetFaculty = () => {
	return (
		<div className="bg-white pt-16">
			<SectionHeader
				title={"Meet our Faculty & Experts"}
				subTitle={"Learn from the Best"}
				description={
					"Learn from industry-leading forensic professionals, fraud auditors, digital investigators, and legal experts with years of real-world experience."
				}
			/>
			<div className="bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] from-[#86efac] via-[#fcd34d] to-[#f9a8d4] py-16 mt-10">
				<div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 place-items-center">
					{faculties.map(({ image, name, portfolio }, index) => (
						<div
							className={`relative rounded-3xl bg-white shadow-lg py-14 px-8 max-w-[350px] ${
								index + 1 === 2 && "lg:scale-110 col-span-1"
							} ${
								index + 1 === 3 &&
								"col-span-1 md:col-span-2 lg:col-span-1"
							}`}
							key={index}
						>
							<GlowingEffect
								blur={0}
								borderWidth={3}
								spread={80}
								glow={true}
								disabled={false}
								proximity={64}
								inactiveZone={0.01}
							/>
							<div
								className={`flex items-center justify-center flex-col text-center mx-auto`}
							>
								<Image
									src={image}
									alt={`${name} picture`}
									width={1000}
									height={1000}
									className="rounded-full h-[200px] w-[200px] object-cover group-hover:scale-105 transition-all group-hover:border-primary hover:border-2"
								/>
								<h4 className="font-semibold uppercase text-primary text-xl mt-8">
									{name}
								</h4>
								<p className="mt-4 text-sm font-medium leading-loose">
									{portfolio}
								</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default MeetFaculty;
