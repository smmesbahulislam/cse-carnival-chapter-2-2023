<<<<<<< HEAD
import {
	Route,
	Routes,
	useLocation,
	useNavigationType,
} from "react-router-dom";
import "./App.css";
import Homepage from "./components/Pages/Homepage/Homepage";

function App() {
	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<Homepage />} />
			</Routes>
		</div>
	);
=======
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AdminDashboard from './pages/AdminDashboard';
import Blog from './pages/Blog';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="admin-dashboard" element={<AdminDashboard/>} />
        <Route path="blog" element={<Blog/>} />
      </Routes>
    </Router>
  );
>>>>>>> develop
}

export default App;
