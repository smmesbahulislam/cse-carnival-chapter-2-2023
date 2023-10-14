import React from 'react'
import DoctorCard from '../components/specialists/DoctorCard'
import InternCard from '../components/specialists/InternCard'
import Nav from '../components/Nav/Nav'
import {motion} from 'framer-motion';
const doctor_data=[
    {
        name: 'Dr. Samina',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        image: 'images/user_image.jpg',
        email: 'samina@gmail.com'
    },
    {
        name: 'Dr. Samina',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        image: 'images/user_image.jpg',
        email: 'samina@gmail.com'
    },
    {
        name: 'Dr. Samina',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        image: 'images/user_image.jpg',
        email: 'samina@gmail.com'
    },
    {
        name: 'Dr. Samina',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        image: 'images/user_image.jpg',
        email: 'samina@gmail.com'
    },
    {
        name: 'Dr. Samina',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        image: 'images/user_image.jpg',
        email: 'samina@gmail.com'
    },
]

const intern_data=[
    {
        name: 'Shorna',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        image: 'images/user_image.jpg',
        email: 'shorna@gmail.com'
    },
    {
        name: 'Shorna',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        image: 'images/user_image.jpg',
        email: 'shorna@gmail.com'
    },
    {
        name: 'Shorna',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        image: 'images/user_image.jpg',
        email: 'shorna@gmail.com'
    },
    {
        name: 'Shorna',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        image: 'images/user_image.jpg',
        email: 'shorna@gmail.com'
    },
    {
        name: 'Shorna',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        image: 'images/user_image.jpg',
        email: 'shorna@gmail.com'
    },
    {
        name: 'Shorna',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        image: 'images/user_image.jpg',
        email: 'shorna@gmail.com'
    },
]

const Specialists = () => {
  return (
    <>
    <Nav/>
    <div 
        style={{
            backgroundColor: '#f0f3fb',
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        }}
    >
    <div className='specialists'
        style={{
            marginTop: '60px',
            width: '100%',
            padding: '0px 50px 0px 85px',
            textAlign: 'center',
        }}
    >
    <h1
        style={{
            fontFamily: 'cursive',
            fontSize: '50px'
        }}
    >Meet Our Experts</h1>
    <h2>Doctor's Lists: </h2>
    <motion.div
        initial={{ y: '+100vh' }}
        animate={{ y: '0' }} 
        transtion={{
            type: 'spring',
            duration: 1
        }}
        style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '10px'
        }}
    >
        {doctor_data.map((doctor, index) => (
            <DoctorCard
                key={index}
                name={doctor.name}
                description={doctor.description}
                image={doctor.image}
                email={doctor.email}
            />
        ))}
    </motion.div>
    
    <h2>Intern's List:</h2>
    <div 
        style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '10px'
        }}
    >
        {intern_data.map((intern, index) => (
            <InternCard
                key={index}
                name={intern.name}
                description={intern.description}
                image={intern.image}
                email={intern.email}
            />
        ))}
    </div>
    </div>
    </div>
    </>
  )
}

export default Specialists