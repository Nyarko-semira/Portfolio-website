import React from 'react'
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import './Section1.css'
import InfoContainer from '../InfoContainer/InfoContainer';
import webd from '../../assets/web-development.png'
import Navbar from '../Navbar/Navbar';

const Section1 = () => {
  return (
   <Row className='py-5  section1'>
    <Col md={7} sm={12} >
    <InfoContainer />
    </Col>
    <Col md={5} sm={12}>
    <div className='image'>
        <img src={webd} alt="" className='image-web' />
    </div>
   
    </Col>
   </Row>

      
    
  )
}

export default Section1
