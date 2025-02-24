import { aboutHighlights } from "@/constants";
import Image from "next/image";
import React from "react";

const HighLightBoxes = () => {
	return (
		<div className="container">
			<div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
				{aboutHighlights.map(({ icon, title, description }, index) => (
					<div
						className="bg-[#F8F9FA] rounded-md flex gap-2 items-start justify-start shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)] px-6 py-10"
						key={index}
					>
						<Image
							src={icon}
							alt={title}
							width={1000}
							height={1000}
							className="w-[50px] h-[50px]"
						/>
						<div>
							<h4 className="text-blue-400 uppercase text-base font-semibold">
								{title}
							</h4>
							<p className="text-sm mt-2 leading-loose">
								{description}
							</p>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default HighLightBoxes;
