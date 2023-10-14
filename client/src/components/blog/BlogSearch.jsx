import React from 'react'

const BlogSearch = () => {
  return (
    <div className='blog-search'>
    <h3>Filter by Searching:</h3>
        <input 
        className='search-box'
        type='search' 
        placeholder='Search by author'
        // onChange={searchChange}
        style={{outline: 'none'}}
        />
        <input 
        className='search-box'
        type='search' 
        placeholder='Search'
        // onChange={searchChange}
        style={{outline: 'none'}}
        />
    </div>
  )
}

export default BlogSearch