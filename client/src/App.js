import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Homepage from "./components/Pages/Homepage/Homepage";
import AdminDashboard from "./pages/AdminDashboard";
import Blog from "./pages/Blog";

function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Homepage />} />
				<Route path="admin-dashboard" element={<AdminDashboard />} />
				<Route path="blog" element={<Blog />} />
			</Routes>
		</Router>
	);
}

export default App;
