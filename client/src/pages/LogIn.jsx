import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../components/logIn/LogIn.css";

const LogIn = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const navigate = useNavigate();
	const handleLogin = async (e) => {
		e.preventDefault();
		const info = {
			email,
			password,
		};

		if (email === "admin@gmail.com" && password === "admin") {
			navigate("/admin-dashboard");
		}
		try {
			const response = await axios.post(
				`${process.env.REACT_APP_API}/api/v1/auth/login`,
				info
			);
			console.log(response);
			if (response) {
				console.log("Login Success");
			}
		} catch (err) {
			console.log("Error");
		}

		console.log("Email:", email, "Password:", password);
	};

	return (
		<div className="log-in-container">
			<div className="log-in">
				<div className="left">
					<h1>Welcome! We are glad to see you again</h1>
				</div>
				<div className="right">
					<div className="login-signup">
						<h3>
							Not a member? <a href="/signup">sign up</a>
						</h3>
					</div>
					<div className="login-form">
						<form className="login-form" onSubmit={handleLogin}>
							<h2>Login</h2>
							{/* <label>Email:</label> */}
							<div className="login-input">
								<input
									type="email"
									value={email}
									placeholder="Enter your email"
									onChange={(e) => setEmail(e.target.value)}
									required
								/>
								{/* <label>Password:</label> */}
								<input
									type="password"
									value={password}
									placeholder="Enter your password"
									onChange={(e) => setPassword(e.target.value)}
									required
								/>
								<button type="submit">Login</button>
							</div>
							<h4>
								Forgot Password? <a href="#">Click here</a>
							</h4>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default LogIn;
