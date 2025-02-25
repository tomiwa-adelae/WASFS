"use client";
import React from "react";
import Image from "next/image";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

export function CourseAudiences() {
	const images = [
		{
			src: "/assets/images/fingerprints.jpg",
			alt: "A picture a number of fingerprints on a paper",
		},
		{
			src: "/assets/images/phone-laptop-data.jpg",
			alt: "A picture of a phone over a laptop checking financial data and projections",
		},
		{
			src: "/assets/images/investigation-law-img.jpg",
			alt: "A picture of an investigation with fingerprints and evidences",
		},
	];
	const [open, setOpen] = React.useState(false);
	const [currentIndex, setCurrentIndex] = React.useState(0);

	const handleOpen = (index: number) => {
		setCurrentIndex(index);
		setOpen(true);
	};

	return (
		<div>
			<div className="grid grid-cols-4 grid-rows-2 gap-4">
				{images.map(
					(
						{ src, alt }: { src: string; alt: string },
						index: number
					) => (
						<div
							key={index}
							className={`overflow-hidden rounded-lg ${
								index + 1 === 1 ? "col-span-full" : "col-span-2"
							}`}
							onClick={() => handleOpen(index)}
						>
							<Image
								src={src}
								width={1000}
								height={1000}
								alt={alt}
								className="w-full h-full aspect-video object-cover cursor-pointer hover:scale-105 transition-all"
							/>
						</div>
					)
				)}
			</div>

			{open && (
				<Lightbox
					open={open}
					close={() => setOpen(false)}
					slides={images}
					index={currentIndex}
				/>
			)}
		</div>
	);
}
