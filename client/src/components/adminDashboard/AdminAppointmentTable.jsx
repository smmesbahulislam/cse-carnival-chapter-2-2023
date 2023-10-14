import React from 'react';
import './Admin.css';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

const data=[
    {
        img: 'images/user_image.jpg',
        name: 'Mashia Hossain',
        assignedDoctor: 'Fathoor Rabbani',
        date: '23/12/2023',
        disease: 'Psycho',
    },
    {
        img: 'images/user_image.jpg',
        name: 'Mashia Hossain',
        assignedDoctor: 'Fathoor Rabbani',
        date: '23/12/2023',
        disease: 'Psycho',
    },
    {
        img: 'images/user_image.jpg',
        name: 'Mashia Hossain',
        assignedDoctor: 'Fathoor Rabbani',
        date: '23/12/2023',
        disease: 'Psycho',
    }
];


const AdminAppointmentTable = () => {
  return (
    <div className='admin-table appoinment-table'>
    <h1>Booked Appointments</h1>
    <div style={{height: '400px', overflowY: 'auto'}}>
    <table>
        <thead>
            <tr>
                <th>#</th>
                <th>Patient Name</th>
                <th>Assigned Doctor</th>
                <th>Date</th>
                <th>Disease</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
            {data.map((item)=>(
                <tr>
                <td>
                    <img src={item.img} alt='image'/>
                </td>
                <td>{item.name}</td>
                <td>{item.assignedDoctor}</td>
                <td>{item.date}</td>
                <td>{item.disease}</td>
                <td>
                    <button className='admin-appointment-table-btn'>
                        <DriveFileRenameOutlineIcon
                            sx={{
                                color: '#0044FD',
                                fontSize: '33px',
                                cursor: 'pointer',
                                marginRight: '12px',
                            }}
                        />
                    </button>
                    <button className='admin-appointment-table-btn'>
                        <DeleteOutlineIcon
                            sx={{
                                color: 'crimson',
                                fontSize: '33px',
                                cursor: 'pointer',
                                marginRight: '12px',
                            }}
                        />
                    </button>
                </td>
            </tr>
            ))}
            
        </tbody>
    </table>
    </div>
    </div>
  )
}

export default AdminAppointmentTable