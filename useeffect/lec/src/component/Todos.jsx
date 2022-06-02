import React, { useEffect, useState } from 'react'

const Todos = () => {

    const [newTodo,setNewTodo]=useState("");
const [todos,setTodos]=useState([])
  

    const setInfo=()=>{
        //call api to save this information in backend
        fetch("http://localhost:8080/todos",{
        method:"POST",
        headers:{
            "content-type":"application/json",
        },
        body:JSON.stringify({
            text:newTodo,
            IsCompleted:false,
        }),
    })
    .then((r)=>r.json())
    .then((d)=>{
     //   console.log(d);
     setTodos([...todos, d])
        setNewTodo("")
      });

    
};
    useEffect(()=>{
        fetch("http://localhost:8080/todos")
        .then((r)=>r.json())
        .then((d)=>{
          console.log(d);
          setTodos(d)
        });


    }, [])

    
  return (
    <div>Todos
    <div>
        <input value={newTodo} onChange={({target})=>setNewTodo(target.value)}/>
        <button onClick={setInfo}>+</button>
        {todos.map((todo)=>(
            <div key={todo.id}>{todo.text}</div>
        ))}
    </div></div>
  )
}

export default Todos