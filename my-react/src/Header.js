import React from 'react'
import PostFun from './PostFun';
import './index.css';


const Header = ({post,setPost}) => {
  return (
    <>
    {post.map(post => 
    <PostFun key={post.id} post={post} />)}
    </>
     
  )
}

export default Header