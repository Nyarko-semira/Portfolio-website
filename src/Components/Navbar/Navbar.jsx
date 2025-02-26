import React from 'react'
import './Navbar.css'
import portifolio  from '../../assets/pic.png'
import { Button } from 'react-bootstrap'

const Navbar = () => {
  return (
    <div className='nav'>
      <div className='logo'>
        <img src={portifolio} alt="" />
      </div>

      <ul>
        <li > <a href="#" className='home'>Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Project</a></li>
        <li> <a href="#">Skill</a></li>
        <li><a href="#">Contact</a></li>
      </ul>

    <Button className='btn'>Hire Me</Button>
    </div>
  )
}

export default Navbar
