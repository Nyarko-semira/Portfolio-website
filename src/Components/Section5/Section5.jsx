import React from "react";
import "./Section5.css";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

const Section5 = () => {
  return (
    <div className="section5">
      <div className="form-info">
        <h5>Let Talk ABout the Next Big Thing</h5>
        <p>Get in Touch or Send Email @nyarkosemira.gmail.com</p>
      </div>

      <div className="w-50 mx-auto text-center">
        <Row className="mb-4 ">
          <Col>
            <Form.Group controlId="formFile">
              <Form.Label>Name</Form.Label>
              <Col md="auto" sm="auto">
                <Form.Control type="text" placeholder="Enter Name" />
              </Col>
            </Form.Group>
          </Col>

          <Col>
            <Form.Group controlId="formFile">
              <Form.Label>Email</Form.Label>
              <Col md="auto" sm="auto">
                <Form.Control type="email" placeholder="nayrko@gmail.com" />
              </Col>
            </Form.Group>
          </Col>
        </Row>

        <Row>
          <Col>
            <Form.Group controlId="formFile">
              <Form.Label>Phone Number</Form.Label>
              <Col md="auto" sm="auto">
                <Form.Control type="number" placeholder="+ 12342445" />
              </Col>
            </Form.Group>
          </Col>

          <Col>
            <Form.Group controlId="formFile">
              <Form.Label>Company</Form.Label>
              <Col md="auto" sm="auto">
                <Form.Control type="text" />
              </Col>
            </Form.Group>
          </Col>
        </Row>

        <Row>
          <Col>
            <Form.Group className="my-2">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                type="text"
                placeholder="Enter Description"
              />
            </Form.Group>
          </Col>
        </Row>

        <div className=" mt-3">
          <Button variant="outline-primary" size="lg">
            Submit
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Section5;
