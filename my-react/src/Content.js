import React from 'react'
import './index.css';


const Content = () => {

  const contentChange= ()=> {
    const APP_URL='https://jsonplaceholder.typicode.com/'
    const response= fetch(APP_URL)
    const listItems= JSON.stringify(response)
  }
  
    return (
    <main> 
      <input  type="text" onChange={()=>contentChange>
       User </input>
    </main>
    
       )
      }
export default Content