import React from 'react'

const user_data=[
    {
        img:'images/user_image.jpg',
        name: 'Samina Tasneem',
        status: 'Active'
    },
    {
        img:'images/user_image.jpg',
        name: 'Mubasshira Tasneem',
        status: 'Active'
    },
    {
        img:'images/user_image.jpg',
        name: 'Ishrar Nazah Chowdhury',
        status: 'Active'
    },
    {
        img:'images/user_image.jpg',
        name: 'Farzana Rifat Raha',
        status: 'Active'
    }
]

const AdminTable = ({name}) => {
  return (
    <div className='admin-table table-size'>
    <h1>{name}'s list</h1>
    <div className='table-container' style={{ height: '500px', overflowY: 'auto'}}>
    <table
        style={{
            height: '200px',
        }}
    >
    <thead>
        <tr>
            <th>#</th>
            <th>Name</th>
            <th>Status</th>
        </tr>
    </thead>
    <tbody>
        {user_data.map((data)=>(
            <tr>
            <td>
                <img src={data.img} alt='image'/>
            </td>
            <td>{data.name}</td>
            <td className='status'>{data.status}</td>
        </tr>
        ))}
        </tbody>
</table>
</div>
</div>
  )
}

export default AdminTable