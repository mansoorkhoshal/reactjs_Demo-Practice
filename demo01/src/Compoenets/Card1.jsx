import React from 'react'
import {Card} from 'react-bootstrap' 
const Card1 = (props) => {
  return (
 <>
 <Card style={{width:"20rem"}} >
    <Card.Img src={props.img} />
    <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Text> Lorem ipsum dolor sit amet. </Card.Text>
    </Card.Body>
 </Card>
 </>
  )
}

export default Card1
