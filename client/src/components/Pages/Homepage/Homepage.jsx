import React from "react";
import Facilities from "../../Facilities/Facilities";
import Footer from "../../Footer/Footer";
import Nav from "../../Nav/Nav";

import Slideshow from "../../ImageScrolling/ImageScrolling";

const Homepage = () => {
	const images = [
		"https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
		"https://plus.unsplash.com/premium_photo-1676325101995-cdfc26d820bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
	];
	return (
		<>
			<Nav />
			<main>
				<section>
					<Slideshow />
				</section>
				<section>
					<Facilities />
				</section>
				<section>{/* Our motto section */}</section>
			</main>
			<Footer />
		</>
	);
};

export default Homepage;
