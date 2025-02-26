import React from 'react'
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Contact = () => {
  return (
    <div className='contact'>
      
            <Row>
                <Col md={6} sm={6} >
                <div className="field">
                <h4>Name:</h4>
                <p>Nyarko Semiratu</p>
               </div>
                </Col>

                <Col md={6} sm={6} >
                <div className="field">
               <h4>Phone:</h4>
               <p>+123457754</p>
                </div>
                </Col>
            </Row>
        
       <Row>

        <Col md={6} sm={12} >
        <div className="field">
            <h4>Email:</h4>
            <p>nyarkosemira@gmail.com</p>
        </div>
        </Col>

        <Col md={6} sm={12} >
        <div className="field">
            <h4>Twitter:</h4>
            <p>ama_nayrko</p>
        </div>
        </Col>
       </Row>

    
    </div>
  )
}

export default Contact
