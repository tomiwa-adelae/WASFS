import { coreValues } from "@/constants";
import SectionHeader from "./shared/SectionHeader";
import Image from "next/image";

const CoreValues = () => {
	return (
		<div className="bg-white">
			<div className="grid grid-cols-1 md:grid-cols-5">
				<div className="flex items-center justify-center flex-col py-16 col-span-3">
					<SectionHeader
						title={"Our Core Values"}
						subTitle={"The Pillars of WASFS"}
						description={
							"At WASFS, our values define who we are and shape the way we educate and train forensic professionals."
						}
						position="right"
					/>
					<div className="container mt-4 grid gap-4">
						{coreValues.map((who, index) => (
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
									{who}
								</p>
							</div>
						))}
					</div>
				</div>
				<Image
					src={"/assets/images/core-values.jpg"}
					alt={
						"A calculator and several different highlighter pencil and sticky notes to indicate a list"
					}
					width={1000}
					height={1000}
					className="aspect-auto w-auto h-full object-cover col-span-2"
				/>
			</div>
		</div>
	);
};

export default CoreValues;
