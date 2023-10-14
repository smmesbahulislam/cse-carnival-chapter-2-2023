import React, { Component } from "react";
import Footer from "../../Footer/Footer";
import Nav from "../../Nav/Nav";
import "./Signup.css"; // Import your CSS file

class Signup extends Component {
	constructor(props) {
		super(props);
		this.state = {
			role: "patient",
			name: "",
			email: "",
			password: "",
			secretKey: "",
			specialization: "",
			licenseNumber: "",
		};
	}

	handleRoleChange = (event) => {
		const selectedRole = event.target.value;
		this.setState({
			role: selectedRole,
			specialization: "",
			licenseNumber: "",
		});
	};

	handleChange = (event) => {
		const { name, value } = event.target;
		this.setState({ [name]: value });
	};

	render() {
		return (
			<>
				<Nav />
				<div className="signup-section">
					<div className="signup-container">
						<h2>Sign Up</h2>
						<form className="signup-form">
							<div>
								<label htmlFor="role">Select Role:</label>
								<select
									name="role"
									id="role"
									value={this.state.role}
									onChange={this.handleRoleChange}
									className="box"
								>
									<option value="patient">Patient</option>
									<option value="intern">Intern</option>
									<option value="doctor">Doctor</option>
								</select>
							</div>
							<div>
								<label htmlFor="name">Name:</label>
								<input
									type="text"
									name="name"
									id="name"
									value={this.state.name}
									onChange={this.handleChange}
									className="box"
								/>
							</div>
							<div>
								<label htmlFor="email">Email:</label>
								<input
									type="email"
									name="email"
									id="email"
									value={this.state.email}
									onChange={this.handleChange}
									className="box"
								/>
							</div>
							<div>
								<label htmlFor="password">Password:</label>
								<input
									type="password"
									name="password"
									id="password"
									value={this.state.password}
									onChange={this.handleChange}
									className="box"
								/>
							</div>
							<div>
								<label htmlFor="secretKey">Secret Key:</label>
								<input
									type="text"
									name="secretKey"
									id="secretKey"
									value={this.state.secretKey}
									onChange={this.handleChange}
									className="box"
								/>
							</div>
							<div
								className={`specialization-field ${
									this.state.role === "doctor" || this.state.role === "intern"
										? "show"
										: ""
								}`}
							>
								<label htmlFor="specialization">Specialization:</label>
								<input
									type="text"
									name="specialization"
									id="specialization"
									value={this.state.specialization}
									onChange={this.handleChange}
									className="box"
								/>
							</div>
							<div
								className={`license-number-field ${
									this.state.role === "doctor" || this.state.role === "intern"
										? "show"
										: ""
								}`}
							>
								<label htmlFor="licenseNumber">License Number:</label>
								<input
									type="text"
									name="licenseNumber"
									id="licenseNumber"
									value={this.state.licenseNumber}
									onChange={this.handleChange}
									className="box"
								/>
							</div>
							<button className="btn box">Sign Up</button>
						</form>
					</div>
				</div>
				<Footer />
			</>
		);
	}
}

export default Signup;
