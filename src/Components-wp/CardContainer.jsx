//rafce
import React from 'react'
import CardsDetails from './CardsDetails'

const CardContainer = () => {
  const style=()=>{
    return {backgroundColor: "red"}
  }
  return (
    <div style={style()}>
       <CardsDetails/>
    </div>
  )
}

export default CardContainer

