import "./App.css";
import React from "react";
import { Button } from "react-bootstrap";

class App extends React.Component {
  constructor(props){
    console.log("constructor")
    super(props);
    this.state={
      count:0,
      isShow:true,
      interval:0,
      timer:0

    };
  }
  increment=()=>{
    this.setState({count:this.state.count+1}) 
    }
  /*componentDidMount(){
    this.setState({
      interval:setInterval(() => {
      this.setState({timer:this.state.timer+1})
    }, 1000)
  })
    console.log("componentDidMout")
  }*/
  componentDidUpdate(){
    console.log("componentDidUpdate")
  }
 /* componentWillUnmount(){
    clearInterval(this.state.interval);
  }*/
  handleClick2 = () => {
    if(this.state.interval){
      clearInterval(this.state.interval);
      this.setState({
          interval: 0,
          timer:0
      });
      return;
    }
    this.setState({
      interval:setInterval(() => {
      this.setState({timer:this.state.timer+1})
    }, 1000)
  })
      };
  render() {
    console.log("render")
    console.log("isShow",this.state.isShow)
    return (
      <div>
        <Button onClick={()=>{this.setState({isShow: !this.state.isShow})}}>{this.state.isShow? "hide":"show"}</Button>
        {this.state.isShow? (<div>
        <Button onClick={this.increment}>+</Button>
        <h3>{this.state.count}</h3>
        <Button onClick= {()=>{this.setState({count:this.state.count-1})} }>-</Button>
        <div style={{marginTop:"10px"}}>
        <Button onClick= {()=>{this.setState({count:0})}} >Reset</Button>
        <div>
        <Button onClick={this.handleClick2}> {this.state.interval? "Stop counter": "Start counter"}</Button>
        </div>
       
        </div>
        <h1>{this.state.timer}</h1>
        </div>): (<></>)}
        
      </div>
    );
  }
}

export default App;
