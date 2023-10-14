import React from 'react'
import './Specialists.css'

const InternCard = ({name,description,image,email}) => {
  return (
    <div className='doctor-card'>
        <div className='intern-gradient'></div>
        <div className='doctor-profile'>
            <img src={image} alt='doctor-image'/>
            <div className='profile-title'>{name}</div>
            <div className='profile-description'>
            {description}
            </div>
            <div className='profile-button'>
                <a href={email}>Contact Me</a>
            </div>
        </div>
    </div>
  )
}

export default InternCard