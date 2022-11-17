import React,{ useState } from 'react';
import "./App.css";
import { useSelector,useDispatch} from 'react-redux';
import { increment,decrement, inputInc} from './JS/actions/action';
const App = () => {
  const count= useSelector((state)=>state.countReducer.count)
  const dispatch= useDispatch();
  const [num,setNum]= useState(0)
  const inc=()=>{
    dispatch(increment())
  }
  const inputIncCount=(e)=>{
    e.preventDefault()
    dispatch(inputInc(+num))//+ pour force type to number
  }
  return (
    <div>
      <form onSubmit={inputIncCount}>
      <input type="number" onChange={(e)=>setNum(e.target.value)}/>
      <button type="submit" value="submit">Submit</button>
      </form>
      <button onClick={inc}>+</button>
      <h1>{count}</h1>
      <button onClick={()=>dispatch(decrement())}>-</button>
      </div>
  )
}

export default App