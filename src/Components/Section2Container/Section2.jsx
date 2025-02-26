import React from 'react'
import './Section2.css'
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import lady from '../../assets/Corporate-lady.png'
import InfoContainer from '../InfoContainer/InfoContainer'
import BioContainer from '../BioContainer/BioContainer';

const Section2 = () => {
  return (
    <div className="section2">
 <Row>
      <Col md="6" sm='6'>
        <div className='image'>
           <img src={lady} alt=""  className='img'/>
        </div>
        </Col>

        <Col md="6" sm='6'>
        <BioContainer/>
        </Col>

       
        </Row>

        </div>
  )
}

export default Section2
