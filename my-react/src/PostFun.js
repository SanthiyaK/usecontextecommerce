import React from 'react'
import { useParams } from 'react-router-dom'

const PostFun = ({post}) => {

    const {id} = useParams()
  return (
    <article> 
        
  {/*  <h2> {post.title}</h2> */}
   
    <div>PostFun {id} </div> </article>
  )
}

export default PostFun