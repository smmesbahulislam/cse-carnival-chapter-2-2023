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
}

export default App;
