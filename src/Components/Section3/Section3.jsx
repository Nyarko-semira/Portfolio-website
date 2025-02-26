import React from 'react'
import './section3.css'
import Card from 'react-bootstrap/Card';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import project from '../../assets/project1.png'
import pic from '../../assets/w.jpg'
import { MdOutlineArrowOutward } from "react-icons/md";

const Section3 = () => {
    return (
        <div className='section3'>
            <div className='projects'>
                <h3>Look at my latest Project </h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Facere perspiciatis exercitationem,
                    tempora quas placeat debitis nam facilis corrupti ducimus eum!</p>
            </div>


            <Row className="justify-content-md-center my-5">
                <Col md="auto">
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="end" src={project} />
                        <Card.Body>
                            <Card.Title>Project One</Card.Title>
                            <Card.Text>
                                Dashboard
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md="auto">
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="end" src={pic} />
                        <Card.Body>
                            <Card.Title>Project Two</Card.Title>
                            <Card.Text>
                                Landing page
                            </Card.Text>
                        </Card.Body>
                    </Card>

                </Col>
                <Col md="auto">
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="end" src={project} />
                        <Card.Body>
                            <Card.Title>Project One</Card.Title>
                            <Card.Text>
                                Board
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>


            </Row>

            <div className='btn-project'>
                <a href="#about">See ALL Projects</a>
                <MdOutlineArrowOutward  />
            </div>



        </div>
    )
}

export default Section3
