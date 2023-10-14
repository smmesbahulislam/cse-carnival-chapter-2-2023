import React from "react";
import "./Facilities.css";

import facilities_1 from "../../assets/facilities_1.jpg";
import facilities_2 from "../../assets/facilities_2.jpg";

const facilities = [
	{
		key: 0,
		image: facilities_1,
		title: "Facility Title 1",
		description:
			"Facility description or details go here. You can add multiple paragraphs or content as needed.",
	},
	{
		key: 1,
		image: facilities_2,
		title: "Facility Title 2",
		description: "More details about the facility 2...",
	},
	// Add more facilities as needed
];

const Facilities = () => {
	return (
		<div>
			{facilities.map((facility, index) => (
				<div>
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
						<div className="facilities-section" key={index}>
							<div className="facilities-details">
								<h2>{facility.title}</h2>
								<p>{facility.description}</p>
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
