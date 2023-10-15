import DoctorCard from '../components/specialists/DoctorCard'
import InternCard from '../components/specialists/InternCard'
import Nav from '../components/Nav/Nav'
import {motion} from 'framer-motion';
import axios from "axios";
import React, { useEffect, useState } from "react";
// const doctor_data=[
//     {
//         name: 'Dr. Samina',
//         description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
//         image: 'images/user_image.jpg',
//         email: 'samina@gmail.com'
//     },
//     {
//         name: 'Dr. Samina',
//         description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
//         image: 'images/user_image.jpg',
//         email: 'samina@gmail.com'
//     },
//     {
//         name: 'Dr. Samina',
//         description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
//         image: 'images/user_image.jpg',
//         email: 'samina@gmail.com'
//     },
//     {
//         name: 'Dr. Samina',
//         description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
//         image: 'images/user_image.jpg',
//         email: 'samina@gmail.com'
//     },
//     {
//         name: 'Dr. Samina',
//         description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
//         image: 'images/user_image.jpg',
//         email: 'samina@gmail.com'
//     },
// ]

// const intern_data=[
//     {
//         name: 'Shorna',
//         description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
//         image: 'images/user_image.jpg',
//         email: 'shorna@gmail.com'
//     },
//     {
//         name: 'Shorna',
//         description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
//         image: 'images/user_image.jpg',
//         email: 'shorna@gmail.com'
//     },
//     {
//         name: 'Shorna',
//         description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
//         image: 'images/user_image.jpg',
//         email: 'shorna@gmail.com'
//     },
//     {
//         name: 'Shorna',
//         description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
//         image: 'images/user_image.jpg',
//         email: 'shorna@gmail.com'
//     },
//     {
//         name: 'Shorna',
//         description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
//         image: 'images/user_image.jpg',
//         email: 'shorna@gmail.com'
//     },
//     {
//         name: 'Shorna',
//         description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
//         image: 'images/user_image.jpg',
//         email: 'shorna@gmail.com'
//     },
// ]

const Specialists = () => {
	const [doctor_data, setDoctorData] = useState([]);
	const [intern_data, setInternData] = useState([]);

	const fetchAllDoctors = async () => {
		const response = await axios.get(
			`${process.env.REACT_APP_API}/api/v1/doctor/all-doctor`
		);
		// console.log(response);
		setDoctorData(response.data.doctors);
	};

	const fetchAllInterns = async () => {
		const response = await axios.get(
			`${process.env.REACT_APP_API}/api/v1/intern/all-intern`
		);
		// console.log(response);
		setInternData(response.data.interns);
	};

	useEffect(() => {
		fetchAllDoctors();
		fetchAllInterns();
	}, []);
	return (
		<>
			<Nav />
			<div
				style={{
					backgroundColor: "#f0f3fb",
					width: "100%",
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
				}}
			>
				<div
					className="specialists"
					style={{
						marginTop: "60px",
						width: "100%",
						padding: "0px 50px 0px 85px",
						textAlign: "center",
					}}
				>
					<h1
						style={{
							fontFamily: "cursive",
							fontSize: "50px",
						}}
					>
						Meet Our Experts
					</h1>
					<h2>Doctor's Lists: </h2>
					<motion.div
						initial={{ y: "+100vh" }}
						animate={{ y: "0" }}
						transtion={{
							type: "spring",

							duration: 1,
						}}
						style={{
							display: "flex",
							flexWrap: "wrap",
							gap: "10px",
						}}
					>
						{doctor_data.map((doctor, index) => (
							<DoctorCard
								key={index}
								name={doctor?.name}
								description={doctor?.specialization}
								image={
									doctor?.profilePhoto
										? `http://localhost:8000/${doctor?.profilePhoto}`
										: "/images/user_image.jpg"
								}
								email={doctor?.email}
							/>
						))}
					</motion.div>

					<h2>Intern's List:</h2>
					<div
						style={{
							display: "flex",
							flexWrap: "wrap",
							gap: "10px",
						}}
					>
						{intern_data.map((intern, index) => (
							<InternCard
								key={index}
								name={intern?.name}
								description={intern?.specialization}
								image={
									intern?.profilePhoto
										? `http://localhost:8000/${intern?.profilePhoto}`
										: "/images/user_image.jpg"
								}
								email={intern?.email}
							/>
						))}
					</div>
				</div>
			</div>
		</>
	);
};

export default Specialists;
