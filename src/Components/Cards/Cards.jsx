import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const Cards = ({title, src, text }) => {
  return (
    <div>
    <Card style={{ width: '14rem' }}>
      <Card.Img variant="top" src={src} style={{width:'80'}}/>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Button variant="primary">{text}</Button>
      </Card.Body>
    </Card>
      
    </div>
  )
}

export default Cards
