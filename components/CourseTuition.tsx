import { coursePaymentOptions, paymentMethods } from "@/constants";
import Image from "next/image";
import React from "react";
import { Separator } from "./ui/separator";

const CourseTuition = () => {
	return (
		<div>
			{/* <Separator className="my-10 container" /> */}
			<div className="container">
				<h2 className="text-blue-400 font-semibold leading-relaxed text-2xl lg:text-3xl lg:leading-relaxed">
					Tuition & Payment Options 💰
				</h2>
				<p
					className={`leading-loose text-sm lg:text-base lg:leading-loose`}
				>
					We believe quality forensic education should be accessible
					to everyone. Choose a payment plan that fits your budget and
					start learning today.
				</p>
				<div className="mt-8 uppercase text-primary flex items-center justify-start gap-2 font-semibold text-lg">
					<Image
						src={"/assets/icons/pin.svg"}
						alt={`Pin icon`}
						width={1000}
						height={1000}
						className="w-[22px] h-[22px]"
					/>
					<h3>Course Fee: $500</h3>
				</div>
				<Separator className="my-10" />
				<div className="mt-8 uppercase text-blue-400 flex items-center justify-start gap-2 font-semibold text-lg">
					<Image
						src={"/assets/icons/pin.svg"}
						alt={`Pin icon`}
						width={1000}
						height={1000}
						className="w-[22px] h-[22px]"
					/>
					<h3>Payment options:</h3>
				</div>
				<div className="mt-8 grid gap-8">
					{coursePaymentOptions.map((option, index) => (
						<div
							key={index}
							className="flex items-start justify-start gap-2"
						>
							<Image
								src={"/assets/icons/check-black.svg"}
								alt={`Check icon`}
								width={1000}
								height={1000}
								className="w-[20px] h-[20px]"
							/>
							<p className="text-sm font-medium italic leading-relaxed">
								{option}
							</p>
						</div>
					))}
				</div>
				<p className="italic text-sm mt-8 text-primary">
					🔔 Note: Installment plans must be completed before
					certification is issued.
				</p>
				<Separator className="my-10" />
				<div className="mt-8 uppercase text-blue-400 flex items-center justify-start gap-2 font-semibold text-lg">
					<Image
						src={"/assets/icons/pin.svg"}
						alt={`Pin icon`}
						width={1000}
						height={1000}
						className="w-[22px] h-[22px]"
					/>
					<h3>Accepted Payment Methods:</h3>
				</div>
				<div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
					{paymentMethods.map(({ icon, method }, index) => (
						<div
							key={index}
							className="flex items-center justify-start gap-4"
						>
							<Image
								src={icon}
								alt={`${method} icon`}
								width={1000}
								height={1000}
								className="w-[40px] h-[40px]"
							/>
							<p className="text-sm font-medium italic leading-relaxed">
								{method}
							</p>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default CourseTuition;
