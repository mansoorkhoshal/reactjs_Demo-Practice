import React from 'react'
import { Card } from 'react-bootstrap'

const Card1 = (props) => {
    return (
        <>
            <Card style={{ width: "20rem" }} >
                <Card.Img src={props.img} />
                <Card.Body>
                    <Card.Title>{props.name}</Card.Title>
                    <Card.Text> Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint dolorum excepturi aut delectus, quam, veritatis quo reprehenderit ut dolores eaque voluptatem dignissimos culpa maxime eum quis saepe. Voluptas, alias deleniti. </Card.Text>
                </Card.Body>
            </Card>
        </>
    )
}

export default Card1

