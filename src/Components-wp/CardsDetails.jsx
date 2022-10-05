import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const CardsDetails = () => {
    const users =[
        {id:0,
        name:"imen",
        email:"imen@gmail.com",
        img: "https://media.allure.com/photos/5a26c1d8753d0c2eea9df033/3:4/w_1262,h_1683,c_limit/mostbeautiful.jpg"},
        {id:1,
            name:"med",
            email:"med@gmail.com",
            img:"https://cdn.yemek.com/mnresize/940/940/uploads/2017/08/manset-cocuklarda-boy-uzatan-besinler.jpg"},
            {id:2,
                name:"firas",
                email:"firas@gmail.com",
                img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-A8B4iDT1513rUrbc1EnNik85QBy2wRoAig&usqp=CAU"},
                {id:3,
                    name:"salah",
                    email:"salah@gmail.com",
                    img:"https://media.istockphoto.com/photos/little-asian-boy-picture-id497000834?k=20&m=497000834&s=612x612&w=0&h=F35pVXU11XyxQDHYQI4mFf3LEShnMadohIZWGXOk6ow="}
    ]
  return (
    <div style={{ display: 'flex' , justifyContent: 'space-around' ,margin:'10rem 2rem'}}>
       {users.map((user)=>( <Card key={user.id} style={{ width: '18rem' }}>
      <Card.Img variant="top" style={{height:'19rem'}} src={user.img} />
      <Card.Body>
        <Card.Title>{user.name}</Card.Title>
        <Card.Text>
          {user.email}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>))}
    </div>
  )
}

export default CardsDetails