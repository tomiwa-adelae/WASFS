import { whoWeServe } from "@/constants";
import SectionHeader from "./shared/SectionHeader";
import Image from "next/image";

const WhoWeServe = () => {
	return (
		<div className="bg-white grid grid-cols-1 md:grid-cols-5 overflow-hidden">
			<div className="flex items-center justify-center flex-col py-16 col-span-3">
				<SectionHeader
					title={"Who we serve"}
					subTitle={"Our Audience"}
					description={
						"At WASFS, we train and certify professionals from diverse backgrounds, including:"
					}
					position="right"
				/>
				<div className="container mt-4 grid gap-4">
					{whoWeServe.map((who, index) => (
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
				src={"/assets/images/who-we-serve.jpg"}
				alt={
					"A hand pointing at a graph of a bar chart of some analytics"
				}
				width={1000}
				height={1000}
				className="aspect-video w-auto h-full object-cover col-span-2 hover:scale-105 transition-all"
			/>
		</div>
	);
};

export default WhoWeServe;
