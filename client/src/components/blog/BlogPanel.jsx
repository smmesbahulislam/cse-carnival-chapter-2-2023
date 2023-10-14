import React,{useState} from 'react'
import './Blog.css'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

const blog_data=[
    {
        title: 'Corona',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        img_author: 'images/user_image.jpg',
        date: '12/12/2021',
        author: 'John Doe',
        tags: ['tag1', 'tag2', 'tag3']
    },
    {
        title: 'Blog Title',
        description: 'Lorem samina dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        img_author: 'images/user_image.jpg',
        date: '12/12/2021',
        author: 'Nick Doe',
        tags: ['tag1', 'tag2', 'tag3']
    }
]


const BlogPanel = ({ searchField,searchAuthor }) => {

    const newSearchField = blog_data.filter((data) => {
        const lowerDescription=data.description.toLowerCase();
        const lowerTitle=data.title.toLowerCase();
        const lowerAuthor=data.author.toLowerCase();

        return lowerDescription.includes(searchField.toLowerCase()) || lowerTitle.includes(searchField.toLowerCase()) || lowerAuthor.includes(searchAuthor.toLowerCase());
      });

  return (
    <div className='blog'>
        {newSearchField.map((data) => (
            <div>
            <div className='blog-section'>
                <div>
                    <h1>{data.title}</h1>
                    <div className='author-tags'>
                    <div className='blog-author'
                        style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            width: '100%'
                        }}
                    >
                    <div className='blog-author-img-info'>
                    <div className='blog-author-img'>
                            <img src={data.img_author} alt='author'/>
                        </div>
                        
                        <div className='blog-author-info'>
                            <span className='author'>{data.author}</span>
                            <span className='date'>{data.date}</span>
                        </div>
                    </div>
                        
                        <div className='tags'>
                            {data.tags.map((tag) => (
                                <span className='tag'
                                    style={{
                                        backgroundColor: tag==='tag1' ? '#8884d8' : tag==='tag2' ? '#82ca9d' : tag==='tag3' ? '#ffc658' : '#ff7300',
                                    }}
                                >{tag}</span>
                            ))}
                        </div>
                        </div>
                    </div>
                </div>
                <div>
                    <p className='description'>{data.description}</p>
                </div>
                <div className='blog-image'>
                    <img src='images/blog_image.jpg' alt='blog_image'/>
                </div>
            </div>
            <div className='up-down'>
              <div className='up'>
                <ArrowUpwardIcon
                    sx={{
                        color: 'green',
                        fontSize: '33px',
                        cursor: 'pointer'
                    }}
                /><span>45</span>             
              </div>
              <div className='down'>
                <ArrowDownwardIcon
                    sx={{
                        color: 'crimson',
                        fontSize: '33px',
                        cursor: 'pointer'
                    }}
                /><span>45</span>
              </div>
            </div>
            </div>
        ))}
    </div>
  )
}

export default BlogPanel