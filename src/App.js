import "./App.css";
import React, { Component } from 'react'
import TodoList from "./components/TodoList";
import AddTodo from "./components/AddTodo";

export default class App extends Component {
  constructor(){
    super()
    this.state={
      todos:[
        {
          id:0,
          title:"Wake Up",
          isDone:false
        },
        {
          id:1,
          title:"Go to work",
          isDone:false
        },
        {
          id:2,
          title:"Go to eat",
          isDone:false
        }
      ]

    }
  }
  done=(id)=>{
  this.setState({todos: this.state.todos.map((el)=>{
    //console.log(id)
    if (el.id===id){
      el.isDone=!el.isDone
    }return el
  })})
  }
  delTodo=(id)=>{
this.setState({todos:this.state.todos.filter((el)=>
  el.id!==id
  )})
  }
  addTodo=(title)=>{
    const newTodo={
      id:Math.random(),
      title:title,
      isDone:false
    }
    this.setState({todos:[...this.state.todos,newTodo]})
  }
  render() {
    return (
      <div>
        <AddTodo addTodo={this.addTodo}/>
        <TodoList todos={this.state.todos} done={this.done} delTodo={this.delTodo}/>
      </div>
    )
  }
}
