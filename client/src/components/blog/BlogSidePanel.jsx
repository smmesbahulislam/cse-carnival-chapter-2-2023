import React from 'react';
import './Blog.css'
import LineWeightIcon from '@mui/icons-material/LineWeight';

const BlogSidePanel = () => {
  return (
    <div className='blog-side-panel'>
        <h3>Filters</h3>
        <div className='filter'>
            <LineWeightIcon
                sx={{color: '#982a3d'}}
            />
            <span>Show All Blogs</span>
        </div>
        <div className='filter'>
            <LineWeightIcon
                 sx={{color: '#982a3d'}}
            />
            <span>Show Recent Blogs</span>
        </div>

    </div>
  )
}

export default BlogSidePanel