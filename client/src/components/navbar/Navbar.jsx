import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import {motion} from 'framer-motion';

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='left'>
            Brand Name
        </div>
        <div className='right'>
            <ul className='navlink'>
                <motion.li className='item'
                    whileHover={{
                        scale: 1.2,
                        transition: { duration: 0.2 },
                    }}
                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                >
                    <Link to='/'>Home</Link>
                </motion.li>
                <li>
                    <Link to='/blog'>Blog</Link>
                </li>
                <li>
                    <Link to='/'>OurTeam</Link>
                </li>
                <li>
                    <Link to='/'>Appointments</Link>
                </li>
            </ul>
        </div>
        <div className='nav-login'>
            <Link to='/'>Login</Link>
        </div>
    </div>
  )
}

export default Navbar