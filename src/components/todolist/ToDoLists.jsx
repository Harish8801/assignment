import React from 'react'

const ToDoLists=(prop)=> {
  return (
      <div className="todo_style">
   <li>{prop.text}</li>
   </div>
  )
}

export default ToDoLists