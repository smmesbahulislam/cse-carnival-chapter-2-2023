import React,{useState} from "react";
import { Link } from "react-router-dom";
import "./Nav.css";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';

import logo from "../../assets/healthchat32.png";

const Nav = ({ isLoggedIn }) => {
	const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
	return (
		<>
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
				<Link to="#" onClick={handleClickOpen}>Appointment</Link>
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

		<Dialog open={open} onClose={handleClose} maxWidth={"md"}>
        <DialogTitle>Provide Comprehensive</DialogTitle>
        <DialogContent>
          <div>
			<div>
				<h1>Make An Appointment</h1>
				<p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam adipiscing elit orem.</p>
			</div>
			<div
				style={{display: "flex", justifyContent: "space-evenly"}}
			>
			<div
				style={{display: "flex", flexDirection: "row",justifyContent:'flex-start',gap: '15px'}}
			>
				<span 
					style={{
						width: '100%',
						fontWeight: "bold",
						fontSize: "17px",
						marginLeft: '2px',
						marginBottom: "10px",
						display: 'inline-block'
					}}
				>Select A Doctor: </span>
				<select 
					style={{
						width: "100%",
						height: '40px',
						padding: "0px",
						borderRadius: "5px",
						border: "1px solid #ccc",
						marginBottom: "20px"
					}}
				>
					<option>Samina Tasneem</option>
					<option>Fathoor Rabbani</option>
					<option>Shahriar Ahmed</option>
				</select>
			</div>
			<div
				style={{display: "flex", flexDirection: "row",justifyContent:'flex-start',gap: '15px'}}
			>
				<span
				style={{
						fontWeight: "bold",
						fontSize: "17px",
						marginLeft: '2px',
						marginBottom: "10px",
						display: "block"
					}}
				>Choose A Date: </span>
				<input type="date"
				style={{
						padding: "10px",
						height: '15px',
						borderRadius: "5px",
						border: "1px solid #ccc",
						marginBottom: "20px"
					}} />
			</div>
			</div>
		  </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
		  <Button>Enter</Button>
        </DialogActions>
      </Dialog>
	  </>
	);
};

export default Nav;
