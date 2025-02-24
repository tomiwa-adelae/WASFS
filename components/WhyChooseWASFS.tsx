import HighLightBoxes from "./HighLightBoxes";
import SectionHeader from "./shared/SectionHeader";

const WhyChooseWASFS = () => {
	return (
		<div className="bg-white py-16">
			<SectionHeader
				title={"Your Gateway to a Successful Forensic Career"}
				subTitle={"Why Choose WASFS?"}
				description={
					"At WASFS, we offer world-class forensic education designed to equip professionals with the knowledge, skills, and certifications needed to excel in forensic auditing, criminal investigations, and digital forensics."
				}
			/>
			<HighLightBoxes />
		</div>
	);
};

export default WhyChooseWASFS;
