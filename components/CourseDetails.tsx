import Image from "next/image";
import {
	courseAudience,
	courseCurriculum,
	refundGuidelines,
} from "@/constants";
import { Separator } from "./ui/separator";
import { CourseAudiences } from "./CourseAudiences";
import { Button } from "./ui/button";
import Link from "next/link";
import CourseTuition from "./CourseTuition";

const CourseDetails = ({ details }: any) => {
	return (
		<div className="bg-white py-16">
			<div className="container">
				<h2 className="text-blue-400 font-semibold leading-relaxed text-2xl lg:text-3xl lg:leading-relaxed mb-2">
					Course overview 📚
				</h2>
				<p
					className={`leading-loose text-sm lg:text-base lg:leading-loose`}
				>
					This program is designed for auditors, accountants, and
					forensic professionals who want to specialize in fraud
					detection, financial crime investigation, and forensic
					accounting techniques. The course covers advanced fraud
					auditing, forensic accounting principles, and legal
					frameworks.
				</p>
				<div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
					<div className="flex items-center justify-start gap-4">
						<Image
							src={"/assets/icons/calendar.svg"}
							alt={`Calendar Icon`}
							width={1000}
							height={1000}
							className="w-[40px] h-[40px]"
						/>
						<p className="text-sm font-medium italic leading-relaxed">
							<span className="text-blue-400">Duration: </span>
							{details?.duration}
						</p>
					</div>
					<div className="flex items-center justify-start gap-4">
						<Image
							src={"/assets/icons/laptop.svg"}
							alt={`Laptop Icon`}
							width={1000}
							height={1000}
							className="w-[40px] h-[40px]"
						/>
						<p className="text-sm font-medium italic leading-relaxed">
							<span className="text-blue-400">
								Mode of Study:{" "}
							</span>
							{details.modeOfStudy}
						</p>
					</div>
					<div className="flex items-center justify-start gap-4">
						<Image
							src={"/assets/icons/graduation-cap.svg"}
							alt={`Graduation Cap Icon`}
							width={1000}
							height={1000}
							className="w-[40px] h-[40px]"
						/>
						<p className="text-sm font-medium italic leading-relaxed">
							<span className="text-blue-400">
								Certification:{" "}
							</span>
							{details.certification}
						</p>
					</div>
					<div className="flex items-center justify-start gap-4">
						<Image
							src={"/assets/icons/scroll.svg"}
							alt={`Scroll Icon`}
							width={1000}
							height={1000}
							className="w-[40px] h-[40px]"
						/>
						<p className="text-sm font-medium italic leading-relaxed">
							<span className="text-blue-400">
								Course Level:{" "}
							</span>
							Beginner to Advanced
						</p>
					</div>
					<div className="flex items-center justify-start gap-4">
						<Image
							src={"/assets/icons/money-bag.svg"}
							alt={`Money Bag Icon`}
							width={1000}
							height={1000}
							className="w-[40px] h-[40px]"
						/>
						<p className="text-sm font-medium italic leading-relaxed">
							<span className="text-blue-400">
								Tuition Fees:{" "}
							</span>
							{details.tuitionFees}
						</p>
					</div>
				</div>
			</div>
			<Separator className="my-10 container" />
			<div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-4 container">
				<div className="col-span-2 flex flex-col items-start justify-center">
					<div>
						<h2 className="text-blue-400 font-semibold leading-relaxed text-2xl lg:text-3xl lg:leading-relaxed mb-2">
							Who Should Take This Course?🎯
						</h2>
						<p
							className={`leading-loose text-sm lg:text-base lg:leading-loose`}
						>
							This program is ideal for professionals looking to
							advance their career in {details.audience}
						</p>
					</div>
					<div className="mt-8 grid gap-8">
						{details.courseAudience.map(
							(
								{
									name,
									details,
								}: { name: string; details: string },
								index: string
							) => (
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
										<span className="text-blue-400">
											{name}:{" "}
										</span>
										{details}
									</p>
								</div>
							)
						)}
					</div>
				</div>
				<CourseAudiences images={details.courseAudienceImages} />
			</div>
			<Separator className="my-10 container" />
			<div className="container">
				<h2 className="text-blue-400 font-semibold leading-relaxed text-2xl lg:text-3xl lg:leading-relaxed mb-2">
					What will you learn? 📖
				</h2>
				<p
					className={`leading-loose text-sm lg:text-base lg:leading-loose`}
				>
					This course is structured into modules covering essential
					topics in fraud auditing and forensic accounting.
				</p>
				<div className="mt-8 grid gap-8">
					{details.modules.map(
						(
							{
								module,
								details,
							}: { module: string; details: string },
							index: string
						) => (
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
									<span className="text-blue-400">
										Module {module}:{" "}
									</span>
									{details}
								</p>
							</div>
						)
					)}
				</div>
			</div>
			<Separator className="my-10 container" />
			<CourseTuition tuitionFees={details.tuitionFees} />
			<Separator className="container my-10" />
			<div className="container">
				<h2 className="text-blue-400 font-semibold leading-relaxed text-2xl lg:text-3xl lg:leading-relaxed mb-2">
					Refund Policy & Financial Assistance 🔄
				</h2>
				<p
					className={`leading-loose text-sm lg:text-base lg:leading-loose`}
				>
					We understand that circumstances may change. Our refund
					policy ensures a hassle-free experience.
				</p>
				{/* <Separator className="my-10" /> */}
				<div className="mt-8 uppercase text-blue-400 flex items-center justify-start gap-2 font-semibold text-lg">
					<Image
						src={"/assets/icons/pin.svg"}
						alt={`Pin icon`}
						width={1000}
						height={1000}
						className="w-[22px] h-[22px]"
					/>
					<h3>Refund Guidelines:</h3>
				</div>
				<div className="mt-8 grid gap-8">
					{refundGuidelines.map((guideline, index) => (
						<div
							key={index}
							className="flex items-center justify-start gap-4"
						>
							<Image
								src={"/assets/icons/check-black.svg"}
								alt={`Check icon`}
								width={1000}
								height={1000}
								className="w-[20px] h-[20px]"
							/>
							<p className="text-sm font-medium italic leading-relaxed">
								{guideline}
							</p>
						</div>
					))}
				</div>
			</div>
			<Separator className="container my-10" />
			<div className="container">
				<h2 className="text-blue-400 font-semibold leading-relaxed text-2xl lg:text-3xl lg:leading-relaxed mb-2">
					Enroll now 🚀
				</h2>
				<p
					className={`leading-loose text-sm lg:text-base lg:leading-loose`}
				>
					Take the next step in your forensic career. Choose your
					payment plan and enroll today!
				</p>
				<div className="flex flex-col md:flex-row items-center justify-start gap-4 md:gap-8 mt-8">
					<Button className="w-full md:w-auto" size={"lg"} asChild>
						<Link href="/admissions">
							Enroll Now & Start Learning
						</Link>
					</Button>
					<Button
						className="w-full md:w-auto"
						variant={"black"}
						size={"lg"}
						asChild
					>
						<Link href="/contact">
							Contact Us for Payment Assistance
						</Link>
					</Button>
				</div>
			</div>
		</div>
	);
};

export default CourseDetails;
