import React from "react";
import { Card, Button } from "react-bootstrap";

 /*const Car = (props) => {
      console.log(props)
    return (
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={props.car.img} />
      <Card.Body>
        <Card.Title>{props.car.name}</Card.Title>
        <Card.Text>
          {props.car.price}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    )*/
  
  /*//ou bien utilise destructing pour props
  const Car = (props) => {
   console.log(props)
   const { name, img, price } = props.car;
   console.log(name);
   return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{price}</Card.Text>
        <Button variant="primary">Buy Now</Button>
      </Card.Body>
    </Card>
  );
};*/

 //ou bien destructuring props
     const Car = ({car, handleMessg}) => {
     console.log(car)
   return (
     <Card style={{ width: '20rem', margin:"2rem" }}>
     <Card.Img variant="top" src={car.img} />
     <Card.Body>
     <Card.Title>{car.name}</Card.Title>
       <Card.Text>
         {car.price}
       </Card.Text>
       <Button variant="primary" onClick={()=>handleMessg(car.name, car.price)}>Buy it</Button>
     </Card.Body>
        </Card>
   )
     };

export default Car;
