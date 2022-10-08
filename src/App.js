import { PropTypes } from "prop-types";
import "./App.css";

const Name =(props)=>{
  console.log(props)
  return( <h1>Bonour, {props.name}</h1>);
}
Name.defaultProps={
  name:"firas"
}

function App(props) {
  const name ="imen"
  return (
    <div >
    <Name name= {name}/>
    </div>
  );
  
}

Name.propTypes ={
  name:PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

export default App;




