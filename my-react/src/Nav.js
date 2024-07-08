import React from 'react'
import { Routes, Route , Link} from 'react-router-dom';
import './App.css'; 
import Newpost from './Newpost';
import Postpage from './Postpage';
import PostFun from './PostFun';
import Missing from './Missing';
import Header from './Header';

const Nav = ({search, setSearch}) => {
  return (
    <div>
    <nav>
      <ul>
        <li><Link to="/"> Home</Link></li>
        <li><Link to="/newpost1"> NewPost</Link></li>
        <li><Link to="/postpage"> PostPage</Link></li>
      </ul>
      <form className="App" onSubmit={(e)=>e.preventDefault()}>
        <label htmlfor="search">Search Post</label>
        <input id="search" type='text' placeholder='Search Post' value={search} 
        onChange={(e)=> setSearch(e.target.value)}
        />
      </form>
    </nav>
      <Routes>
        <Route path="/" element={<Header title="Page" />} />
        <Route path="/newpost1" element={<Newpost />} />
        <Route path="/postpage" element={<Postpage />} />
        <Route path="/postpage/:id" element={<PostFun />} />
        <Route path="*" element={<Missing />} />
      </Routes></div>
  )
}

export default Nav