import React from "react";

const SectionHeader = ({
	title,
	description,
	subTitle,
	position = "center",
	color = "black",
}: {
	title: string;
	description?: string;
	subTitle?: string;
	position?: string;
	color?: string;
}) => {
	return (
		<div
			className={`container space-y-4 ${
				position === "center" ? "text-center" : "text-left"
			} ${color === "black" ? "text-black" : "text-white"}`}
		>
			{subTitle && (
				<div
					className={`flex items-center ${
						position === "center"
							? "justify-center"
							: "justify-start"
					} uppercase text-sm lg:text-base gap-2 ${
						color === "black" ? "text-primary" : "text-white"
					} font-medium`}
				>
					{position === "center" && (
						<div
							className={`h-0.5 w-16 ${
								color === "black" ? "bg-primary" : "bg-white"
							}`}
						/>
					)}
					<h4>{subTitle}</h4>
					<div
						className={`h-0.5 w-16 ${
							color === "black" ? "bg-primary" : "bg-white"
						}`}
					/>
				</div>
			)}
			<h2
				className={`${
					color === "black" ? "text-blue-400" : "text-white"
				} font-semibold leading-relaxed text-2xl lg:text-3xl lg:leading-relaxed`}
			>
				{title}
			</h2>
			<p
				className={`leading-loose ${
					position === "center" && "mx-auto lg:w-5/6"
				} text-sm lg:text-base lg:leading-loose`}
			>
				{description}
			</p>
		</div>
	);
};

export default SectionHeader;
