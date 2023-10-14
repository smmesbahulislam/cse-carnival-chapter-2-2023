import React from "react";
import "./Facilities.css";

import facilities_1 from "../../assets/facilities_1.jpg";
import facilities_2 from "../../assets/facilities_2.jpg";
import facilities_3 from "../../assets/facilities_3.jpg";

const facilities = [
	{
		key: 0,
		image: facilities_1,
		title: "Easy Communication",
		description:
			"Reach out to an expert any time. Our expert team will be always be ready at your service. Communicate with them via chat or call. ",
	},
	{
		key: 1,
		image: facilities_2,
		title: "Gain Knowledge",
		description:
			"Who doesn't want to learn from the best? Enrich your knowledge from our Experts. Learn about the latest medical trends and more. ",
	},
	{
		key: 0,
		image: facilities_3,
		title: "Emergency Service",
		description:
			"Know what to do if you encounter an emergency medical situation. Our expert emergency team will guide you through the process.",
	},
	// Add more facilities as needed
];

const Facilities = () => {
	return (
		<div className="facility-card-section">
			{facilities.map((facility, index) => (
				<div className="facility-card">
					{facility.key === 0 && (
						<div className="facilities-section" key={index}>
							<div className="facilities-image">
								<img src={facility.image} alt="Facility" />
							</div>
							<div className="facilities-details">
								<h2>{facility.title}</h2>
								<p>{facility.description}</p>
							</div>
						</div>
					)}
					{facility.key === 1 && (
						<div className="facilities-section " key={index}>
							<div className="facilities-details">
								<h2 className="odd">{facility.title}</h2>
								<p className="odd">{facility.description}</p>
							</div>
							<div className="facilities-image">
								<img src={facility.image} alt="Facility" />
							</div>
						</div>
					)}
				</div>
			))}
		</div>
	);
};

export default Facilities;
