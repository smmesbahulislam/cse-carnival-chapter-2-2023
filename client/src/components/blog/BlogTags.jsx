import React from 'react'
import './Blog.css'

const tags=['tag1', 'tag2', 'tag3'];

const BlogTags = () => {
  return (
    <div className='blog-tags'>
    <h3>Filter By Tags:</h3>
    <div className='tags'>
    {tags.map((tag, index) => (
        <div className='tag' key={index}>
            <span 
            style={{
                backgroundColor: tag==='tag1' ? '#8884d8' : tag==='tag2' ? '#82ca9d' : tag==='tag3' ? '#ffc658' : '#ff7300',
            }}
            >{tag}</span>
        </div>
    ))}
    </div>
    </div>
  )
}

export default BlogTags