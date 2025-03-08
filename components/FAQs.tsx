import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import { faqs } from "@/constants";
import SectionHeader from "./shared/SectionHeader";

const FAQs = () => {
	return (
		<div id="faqs" className="bg-white py-16">
			<SectionHeader
				title={"Have Questions? We’ve Got Answers!"}
				subTitle={"FAQS"}
				description={
					"Find answers to common questions about our programs, admissions, tuition, certifications, and more."
				}
			/>
			<div className="container">
				<div className="mt-8">
					<Accordion type="single" collapsible className="w-full">
						{faqs.map(({ question, answer }, index) => (
							<AccordionItem value={`${index}`} key={index}>
								<AccordionTrigger>{question}</AccordionTrigger>
								<AccordionContent>
									{answer}
								</AccordionContent>
							</AccordionItem>
						))}
					</Accordion>
				</div>
			</div>
		</div>
	);
};

export default FAQs;
