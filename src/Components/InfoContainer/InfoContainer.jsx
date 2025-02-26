import React from 'react'
import './InfoContainer.css'
import { MdOutlineArrowOutward } from "react-icons/md";

const InfoContainer = () => {
  return (
    <div className='info'>
        <h1>Hello !, I'm <span>Natashia Semiratu Nyarko</span> Web Developer </h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi fugiat velit doloremque nihil 
            eius corrupti reiciendis et, eos omnis.
     Aliquam corrupti pariatur in inventore officia. Quod temporibus quo distinctio quidem quis.</p>
      <div className='bcon'>
         <a href="#about">About Me</a>
         <MdOutlineArrowOutward />
      </div>
    </div>
  )
}

export default InfoContainer
