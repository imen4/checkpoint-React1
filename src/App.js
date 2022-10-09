import "./App.css";
import ListCars from "./wp-props/ListCars";
import mercedes from "./assets/mercedes.jpg";
import ferrari from "./assets/ferrari.jpg";
import porche from "./assets/porche.jpg"

function App(props) {
  const carList=[
    {
      id:1,
      img:mercedes,
      name:"Mercedes",
      price:"300 000 $"
    },
    {
      id:2,
      img:ferrari,
      name:"Ferrari",
      price:"420 000 $"
    },
    {
      id:3,
      img:porche,
      name:"Porche",
      price:"200 000 $"
    }
  ]
  const testCallBack = name =>alert(`hello ${name}`)
  return (
    <div >
      <ListCars carList={carList} testCallBack={testCallBack}/>
    </div>
  );
  
}



export default App;




