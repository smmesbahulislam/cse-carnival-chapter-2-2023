import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

import logo from "../../assets/healthchat32.png";

const Nav = ({ isLoggedIn }) => {
	return (
		<nav>
			<div className="brand">
				<Link to="/">
					<div>
						<img src={logo} alt="Brand Name" />
						HealthChat
					</div>
				</Link>
			</div>
			<div className="services">
				<Link to="/">Home</Link>
				<Link to="/appointment">Appointment</Link>
				<Link to="/blog">Blog</Link>
				<Link to="/specialists">Specialists</Link>
			</div>
			<div className="login-logout">
				{isLoggedIn ? (
					<Link to="/logout">Logout</Link>
				) : (
					<Link to="/login">Login</Link>
				)}
			</div>
		</nav>
	);
};

export default Nav;
