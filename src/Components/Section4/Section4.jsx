import React from 'react'
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import webdesign from '../../assets/webdesign.jpg'
import Cards from '../Cards/Cards'
import figma from '../../assets/figma.avif'
import web from '../../assets/web-development.jpg'
import design from '../../assets/webdesign.jpg'
import home from '../../assets/web-development.png'
import sketch from '../../assets/sketch-logoo.webp'
import './Section4.css'



const Section4 = () => {
  return (
    <div className='section4'>
        <div className='projects'>
                <h3>My Work Skills </h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Facere perspiciatis exercitationem,
                    tempora quas placeat debitis nam facilis corrupti ducimus eum!</p>
            </div>
            <Row className="justify-content-md-center my-5">
            <Col md="auto" sm="12">
            <Cards title="Web design" src={webdesign}  text="50%"/>
            </Col>
            <Col md="auto" sm="12">
            <Cards title="Web Development" src={web} text="90%"/>
            </Col>
            <Col md="auto" sm="12">
            <Cards title="Web design" src={design} text="90%"/>
            </Col>
            <Col md="auto" sm="12">
            <Cards title="Web design" src={webdesign} text="50%"/>
            </Col>
            </Row>

            <Row className="justify-content-md-center my-5">
            <Col md="auto" sm="12">
            <Cards title="Web design" src={home} text="90%"/>
            </Col>
            <Col md="auto" sm="12">
            <Cards title="Web design" src={sketch} text="60%"/>
            </Col>
            <Col md="auto" sm="12">
            <Cards title="Figma" src={figma} text="90%" />
            </Col>
            </Row>

           
    </div>
  )
}

export default Section4
