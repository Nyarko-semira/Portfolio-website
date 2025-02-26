import React from 'react'
import './BioContainer.css'
import { Button } from 'react-bootstrap'
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Contact from '../../Contact'
import ButtonContainer from '../Button/ButtonContainer';



const BioContainer = () => {
  return (
    <div className='bio'>
         <div className='btn2'>
                 <a href="#about">About Me</a>
              </div>
        <h2>Get a  website that will make a lasting impression on your audience!!</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
             Libero suscipit veritatis dolor quasi aliquam ea architecto, odit ullam,
             sapiente id, vero sed.</p>

             <Contact/>

          <div className='btns'>
            <Row className='gap-3'>
                <Col md={5} sm={6} >
                <button className='btn3'>Contact Me</button>
                </Col>

                <Col md={3} sm={6}>
                 <ButtonContainer/>
                </Col>
            </Row>
            



          </div>
        



      
    </div>
  )
}

export default BioContainer
