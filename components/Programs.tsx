import { Button } from "./ui/button";
import Link from "next/link";
import Image from "next/image";
import { ourPrograms } from "@/constants/Programs";

const Programs = () => {
	return (
		<div className="container">
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
				{ourPrograms.map(
					({ title, icon, description, image }, index) => (
						<div
							className="bg-[#F8F9FA] rounded-md shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)] overflow-hidden group"
							key={index}
						>
							<Image
								src={image}
								alt={`${title} image`}
								width={1000}
								height={1000}
								className="aspect-video object-cover w-auto h-auto rounded-t-md group-hover:scale-105 transition-all"
							/>
							<div className="px-6 py-8">
								<div className="flex gap-2 items-start justify-start mb-4">
									<Image
										src={icon}
										alt={title}
										width={1000}
										height={1000}
										className="w-[50px] h-[50px]"
									/>
									<div>
										<Link
											href={`/our-programs/${index}`}
											className="text-blue-400 uppercase text-base font-semibold hover:text-primary transition-all"
										>
											{title}
										</Link>
									</div>
								</div>
								<p className="text-sm mb-4 leading-loose line-clamp-3">
									{description}
								</p>
								<Button className="w-full" size={"lg"} asChild>
									<Link href="/our-programs/12345">
										Learn more
									</Link>
								</Button>
							</div>
						</div>
					)
				)}
			</div>
		</div>
	);
};

export default Programs;
