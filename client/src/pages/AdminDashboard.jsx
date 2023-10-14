import React from 'react';
import Grid from '@mui/material/Grid';
import AdminCard from '../components/adminDashboard/AdminCard';
import AdminTable from '../components/adminDashboard/AdminTable';
import AdminAppointmentTable from '../components/adminDashboard/AdminAppointmentTable';
import AdminBlog from '../components/adminDashboard/AdminBlog';
import AdminSidePanel from '../components/adminDashboard/AdminSidePanel';
import Navbar from '../components/navbar/Navbar';
import Nav from '../components/Nav/Nav'


const AdminDashboard = () => {
  return (
    <>
    <Nav/>
    <div style={{
        paddingTop: '80px'
    }}>
    <Grid container spacing={2}>
        <Grid item xs={2}>
            <AdminSidePanel/>
        </Grid>
        <Grid item xs={10}>
        <div style={{background: '#f0f3fb', paddingBottom: '20px'}}>
        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly'}}>
            <AdminCard
                name='Appointments'
                value='650'
            />
            <AdminCard
                name='Doctors'
                value='100'
            />
            <AdminCard
                name='Patients'
                value='1000'
            />
            <AdminCard
                name='Earnings'
                value='$10000'
            />
        </div>
        <div style={{display: 'flex', flexDirection: 'row', gap: '30px', width: '100%', marginTop: '50px',
        marginBottom: '50px',padding: '25px'}}>
            <AdminTable
                name='Doctor'
            />
            <AdminTable
                name='Patient'
            />
            <AdminTable
                name='Intern'
            />
        </div>
        <div style={{width: '94%', marginTop: '-90px'}}>
        <AdminAppointmentTable/>
        </div>
        <div style={{width: '98%',marginTop: '-90px'}}>
            <AdminBlog/>
        </div>
        </div>
    </Grid>
    </Grid>
    </div>
    </>
  )
}

export default AdminDashboard