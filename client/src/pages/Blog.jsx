import { Grid } from '@mui/material'
import React,{useState} from 'react'
import BlogPanel from '../components/blog/BlogPanel'
import BlogSidePanel from '../components/blog/BlogSidePanel'
import BlogTags from '../components/blog/BlogTags'
import BlogSearch from '../components/blog/BlogSearch'
import Navbar from '../components/navbar/Navbar'
import {motion} from 'framer-motion';

const Blog = () => {
  const [searchField, setSearchField] = useState('');
  const handleSearchChange = (event) => {
    setSearchField(event.target.value);
  };
  return (
    <>
    <Navbar/>
    <motion.div
        initial={{ x: '-100vw' }}
        animate={{ x: '0' }}
        transition={{type: 'spring', stiffness: 120,duration: 1}}
    >
    <Grid container spacing={2}>
        <Grid item xs={2}>
            
            <BlogSidePanel />
        </Grid>
        <Grid item xs={7}>
        <div>
            <BlogPanel searchField={searchField}/>            
        </div>
        </Grid>
        <Grid item xs={3}>
        <div>
            <BlogTags/>
            <BlogSearch onSearchChange={handleSearchChange}/>
        </div>
        </Grid>
    </Grid>
    </motion.div>
    </>
  )
}

export default Blog