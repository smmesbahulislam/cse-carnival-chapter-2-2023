import React from 'react'
import './Admin.css'

const blog_data=[
    {
        img: 'images/user_image.jpg',
        date: '23/12/2023',
        name: 'S M Mesbahul Islam',
        details: 'Keno docotor ra ei website e registration kore na?',
    },
    {
        img: 'images/user_image.jpg',
        date: '23/12/2023',
        name: 'S M Mesbahul Islam',
        details: 'Keno docotor ra ei website e registration kore na?',
    }
]

const AdminBlog = () => {
  return (
    <div className='admin-blog'>
        <h1>Blog Management</h1>
        <div style={{
            height: '410px',
            overflowY: 'auto',
            boxShadow: '1px 1px 9px 0px rgba(0,0,0,0.75)',
        }}>
        {blog_data.map((data)=>(
            <div className='blog-container'>
            <div className='blog-info'>
                <img src={data.img} alt='blog image'/>
                <div className='blog-date-name'>
                <span className='name'>{data.name}</span>
                <span className='date'>{data.date}</span>
                </div>
            </div>
                <p>{data.details}</p>
                <div style={{display: 'flex', justifyContent: 'flex-end'}}>
                <button>Delete</button>
                </div>
            </div>
        ))}
        </div>

    </div>
  )
}

export default AdminBlog