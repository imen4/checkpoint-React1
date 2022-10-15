import React from 'react'
import Todo from './Todo'

const TodoList = ({todos,done,delTodo}) => {
  return (
    <div>
     {todos.map((el)=> <Todo todoA={el} done={done} key={el.id} delTodo={delTodo}/>)}
    </div>
  )
}

export default TodoList