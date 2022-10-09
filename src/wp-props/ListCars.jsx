import React from 'react';
import Car from './Car';
import { Button } from'react-bootstrap';
//props par destructuring
const ListCars = ({carList,testCallBack}) => {
    /*console.log(carList)*/
    const handleMessg= (name,price)=>alert(`You have to pay ${price} to buy ${name}`)
    const name = "this is test call back func "
  return (
    <>
    <div style={{display:"flex", justifyContent:'space-around', margin:"4rem 4rem", border:"3px black solid", backgroundColor:"blue"}}>
        {carList.map( (carr)=> <Car key={carr.id} car={carr} handleMessg={handleMessg}/> )}
    </div>
    <Button style={{margin:"0px 44%"}} onClick={()=>testCallBack(name)}>Test CallBack</Button>
    </>
  )
}

export default ListCars