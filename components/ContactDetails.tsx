import { contactDetails } from "@/constants";
import Image from "next/image";
import React from "react";

const ContactDetails = () => {
	return (
		<div className="lg:col-span-2">
			{contactDetails.map(({ icon, title, name, details }, index) => (
				<div
					className="flex gap-3 items-start justify-start mb-8 bg-[#F8F9FA] rounded-md shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)] px-6 py-8"
					key={index}
				>
					<Image
						src={icon}
						alt={`${name} icon`}
						width={1000}
						height={1000}
						className="w-[50px] h-[50px]"
					/>
					<div>
						<h4 className="text-blue-400 uppercase text-base font-semibold">
							{title}:
						</h4>
						<div className="space-y-2 text-sm mt-2 leading-loose">
							{details.map((detail, index) => (
								<a
									target="_blank"
									href={
										name === "email"
											? `mailto:${detail.detail}`
											: name === "phone"
											? `tel:${detail.detail}`
											: "#"
									}
									key={index}
									className="block"
								>
									{detail.detail}
								</a>
							))}
						</div>
					</div>
				</div>
			))}
		</div>
	);
};

export default ContactDetails;
