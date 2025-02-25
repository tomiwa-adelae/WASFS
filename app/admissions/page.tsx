import CourseTuition from "@/components/CourseTuition";
import FAQs from "@/components/FAQs";
import ApplicationForm from "@/components/forms/ApplicationForm";
import { Separator } from "@/components/ui/separator";
import React from "react";

const page = () => {
	return (
		<div className="mt-16">
			<div className="container">
				<h1 className="uppercase text-4xl leading-relaxed md:text-5xl md:leading-relaxed lg:text-6xl lg:leading-normal font-bold lg:w-5/6">
					Apply to <span className="text-primary">WASFS</span>
				</h1>
				<p className="text-gray-900 leading-loose text-sm md:text-base md:leading-loose lg:w-5/6 mt-4">
					Apply to WASFS and gain a globally recognized forensic
					certification. Follow the steps below to complete your
					application.
				</p>
				<Separator className="my-10" />
				<p className="text-gray-900 leading-loose text-sm md:text-base md:leading-loose lg:w-5/6 mt-4">
					Complete the form below to submit your application. Our
					admissions team will review your details and contact you
					within 48 hours.
				</p>
				<ApplicationForm />
			</div>
			<CourseTuition />
			<FAQs />
		</div>
	);
};

export default page;
