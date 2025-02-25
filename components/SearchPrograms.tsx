import { SearchForm } from "./forms/SearchForm";
import SectionHeader from "./shared/SectionHeader";

const SearchPrograms = () => {
	return (
		<div className="bg-white py-16">
			<SectionHeader
				title={"Choose Your Path in Forensic Science"}
				subTitle={"Advance Your Expertise"}
				description={
					"WASFS offers a range of specialized forensic programs designed to help professionals excel in fraud auditing, criminal investigations, and digital forensics. Explore our categories below and find the perfect course for you"
				}
			/>
			<SearchForm />
		</div>
	);
};

export default SearchPrograms;
