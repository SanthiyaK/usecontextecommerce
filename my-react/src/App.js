import Header from './Header';
import Nav from './Nav';
import { useEffect, useState } from 'react';

function App() {
  const [post, setPost] =useState([
    {
      id: 1,
      title:" My first post",
      body: "hi everyone"
    },
    {
      id: 2,
      title:" My second post",
      body: "hi everyone"
    }
  ])
  const [search, setSearch]= useState('')
// const [searchPost, setSearchPost] =useState([])
   useEffect( () =>{
    const filterResult= post.filter((post)=>((post.body).toLowerCase()).includessearch.toLowerCase())
      || ((post.title).toLowerCase()).includes(search.toLowerCase());
      setSearch(filterResult)
   }, [post , search])
  return (
   <div>
       <Header
        post={post} 
       setPost={setPost}/> 
       <Nav 
       search={search}
       setSearch={setSearch}
       /> 
    </div>
  );
}

export default App;
