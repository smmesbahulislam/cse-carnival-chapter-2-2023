import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Homepage from "./components/Pages/Homepage/Homepage";
import Signup from "./components/Pages/SignUp/SIgnup";
import AdminDashboard from "./pages/AdminDashboard";
import Blog from "./pages/Blog";
import ChatPage from "./pages/ChatPage";
import Login from "./pages/LogIn";
import SignUp from "./pages/SignUp";
import Specialists from "./pages/Specialists";

function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Homepage />} />
				<Route path="admin-dashboard" element={<AdminDashboard />} />
				<Route path="blog" element={<Blog />} />
				<Route path="/chat" element={<ChatPage />} />
				<Route path="login" element={<Login />} />
				<Route path="signup" element={<SignUp />} />
				<Route path="Specialists" element={<Specialists />} />
			</Routes>
		</Router>
	);
}

export default App;
