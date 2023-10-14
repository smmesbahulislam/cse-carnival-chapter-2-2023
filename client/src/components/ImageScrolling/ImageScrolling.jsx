import React from "react";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import "./ImageScrolling.css";

import cover_1 from "../../assets/cover_1.jpg";
import cover_2 from "../../assets/cover_2.jpg";
import cover_3 from "../../assets/cover_3.jpg";

const buttonStyle = {
	// Customize the button position as needed
	// Adjust the right margin
	padding: " 0 10px",
};

const fadeImages = [
	{
		image: cover_1,
		caption: "Connecting \n With Patient",
	},
	{
		image: cover_2,
		caption: "Expert doctor",
	},
	{
		image: cover_3,
		caption: "Team of Experts",
	},
];

const Slideshow = () => {
	return (
		<div className="slide-container">
			<Fade next={buttonStyle} prev={buttonStyle} duration={5000}>
				{fadeImages.map((fadeImage, index) => (
					<div key={index}>
						<img
							style={{ height: "100vh", width: "100%", objectFit: "cover" }}
							src={fadeImage.image}
							alt={fadeImage.caption}
						/>
						<div className="title-overlay">
							<h2>{fadeImage.caption}</h2>
						</div>
					</div>
				))}
			</Fade>
		</div>
	);
};

export default Slideshow;
