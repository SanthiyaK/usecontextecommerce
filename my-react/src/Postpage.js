import React from 'react'
import { Link } from 'react-router-dom'


const Postpage = () => {
  return (
    <main><h1>Postpage</h1>
  
    <Link to="/postpage/1"> Post 1</Link>
    <br></br>
    <Link to="/postpage/2"> Post 2</Link>
    <br></br>
    <Link to="/postpage/3"> Post 3</Link>
    </main>
  )
}

export default Postpage