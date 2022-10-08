import "./App.css";

const Name =(props)=>{
  console.log(props)
  return( <h1>Bonour, {props.nom}</h1>);
}
Name.defaultProps={
  name:"firas"
}

function App(props) {
  const name ="imen"
  return (
    <div >
    <Name nom= {name}/>
    </div>
  );
  
}


export default App;




