import React from 'react'
import './Footer.css'
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (

    <div className='footer'>
      <div className="left">
        <h5>@2025 copyright Ghana</h5>
      </div>

      <div className="right">
        <FaTwitter/>
        <FaLinkedin/>
        <FaInstagram/>

      </div>
    </div>
  )
}

export default Footer
