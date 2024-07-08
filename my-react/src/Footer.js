import React from 'react'
import './index.css';

const Footer = ({length}) => {
 const year = new Date();

  return (
    <footer className="footer"> Copyright &copy; {year.getFullYear()} {length}</footer>
  
  )
}

export default Footer