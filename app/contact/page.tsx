import ContactDetails from "@/components/ContactDetails";
import ContactForm from "@/components/forms/ContactForm";
import FAQs from "@/components/FAQs";
import dynamic from "next/dynamic";

const LeafletMap = dynamic(() => import("@/components/LeafletMap"), {
	ssr: false,
});

import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Contact WASFS | Get in Touch for Forensic Training & Support",
	description:
		"Need help? Contact the West African School of Forensic Studies (WASFS) for inquiries about programs, enrollment, and support. Reach us via email, phone, or chat.",
	keywords:
		"contact WASFS, forensic training support, forensic certification inquiries, forensic course assistance, WASFS admissions contact, wasfs, prof akinteye ademola, ademola, akinteye, simon akinteye, about",
};

const page = () => {
	return (
		<div className="mt-16">
			<div className="container">
				<h1 className="uppercase text-4xl leading-relaxed md:text-5xl md:leading-relaxed lg:text-6xl lg:leading-normal font-bold lg:w-5/6">
					Get in <span className="text-primary">Touch</span>
				</h1>
				<p className="text-gray-900 leading-loose text-sm md:text-base md:leading-loose lg:w-5/6 mt-4">
					Have questions about our programs, enrollment, or technical
					support? Contact our team, and we'll be happy to assist you.
				</p>
			</div>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 container py-16">
				<ContactDetails />
				<ContactForm />
			</div>
			<LeafletMap />
			<FAQs />
		</div>
	);
};

export default page;
