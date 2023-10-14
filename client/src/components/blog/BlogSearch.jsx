import React from 'react'

const BlogSearch = ({ onSearchChange }) => {
  return (
    <div className='blog-search'>
    <h3>Filter by Searching:</h3>
        <input 
        className='search-box'
        type='search' 
        placeholder='Search by author'
        onChange={onSearchChange}
        style={{outline: 'none'}}
        />
        <input 
        className='search-box'
        type='search' 
        placeholder='Search'
        onChange={onSearchChange}
        style={{outline: 'none'}}
        />
    </div>
  )
}

export default BlogSearch