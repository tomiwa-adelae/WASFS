import Showcase from "@/components/shared/Showcase";
import AboutWASFS from "@/components/AboutWASFS";
import ProgramAndCertification from "@/components/ProgramAndCertification";
import WhyWASFS from "@/components/WhyWASFS";
import Testimonials from "@/components/Testimonials";
import SectionHeader from "@/components/shared/SectionHeader";
import ContactDetails from "@/components/ContactDetails";

const page = () => {
	return (
		<div>
			<Showcase />
			<AboutWASFS />
			<ProgramAndCertification />
			<WhyWASFS />
			<Testimonials />
			<div className="bg-white py-16">
				<SectionHeader
					title={"Get in Touch With Us!"}
					subTitle={"Have Questions?"}
					description={
						"Our team is ready to assist you with enrollment, course information, and any other inquiries. Contact us today!"
					}
				/>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 container pt-8">
					<ContactDetails />
				</div>
			</div>
		</div>
	);
};

export default page;
