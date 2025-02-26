import React from 'react'
import './Button.css'
import { MdFileDownload } from 'react-icons/md'

const ButtonContainer = () => {
  return (
    <div className='bottom'>
      <p>Download Cv</p>
      <MdFileDownload className='mb-2'/>
    </div>
  )
}

export default ButtonContainer
