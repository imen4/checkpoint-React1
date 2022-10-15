import React, { Component } from 'react'

class Todo extends Component {
    getStyle= ()=>{
        return{
            textDecoration:this.props.todoA.isDone?"line-through":"none",
            backgroundColor:"yellow",
            color:"black",
            border:"2px black solid"
        }
    }
  render() {
    console.log(this.props)
    return (
      <div style={this.getStyle()}>
        <p style={{padding:"5px",margin:"5px"}}>
            <input type="checkbox" onChange={this.props.done.bind(this,this.props.todoA.id)}/>
            {this.props.todoA.title}
            <button onClick={this.props.delTodo.bind(this,this.props.todoA.id)} style={{backgroundColor:"red", height:"30px",float:"right",textAlign:"center"}}>x</button>
        </p>
      </div>
    )
  }
}
export default Todo
