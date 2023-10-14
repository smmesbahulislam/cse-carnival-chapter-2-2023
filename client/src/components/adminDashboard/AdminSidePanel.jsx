import React from 'react'
import './Admin.css'

const side_data=[
    {
        img: 'images/user_image.jpg',
        name: 'John Doe',
    }
];

const AdminSidePanel = () => {
  return (
    <div className='admin-side-panel'>
    <div className='admin-side-panel-info'>
        <img src={side_data[0].img} alt='admin_image'/>
        <span className='side-panel-name'>{side_data[0].name}</span>
        <span>Admin</span>
    </div>
    <div className='admin-side-panel-options'>
        <h2>Dashboard</h2>
    </div>
    </div>
  )
}

export default AdminSidePanel