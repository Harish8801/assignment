import React, { useReducer, } from "react";
import './style.css';

//reducer({counter:0},{type:"increment",payload:100})
//reducer({counter:0},{type:"decrement",payload:50})

const reducer=(counter,action)=>{
  console.log(action)
  switch (action.type){
    case "INCREMENT":{
      return counter+action.payload;
    }
    case "DECREMENT":{
      return counter-action.payload
    }
    default:{
      console.log("Type of incorect", action.type)
      return counter;
    }
  }
};

function Counter1() {
  const [counter,dispatch]=useReducer(reducer,0);

 


  return (<>
    <div className="App">
    {/* React is controlling the value
    harish is controlling input element */}
  <h1> Counter:{counter}</h1>
   <div>
   <button onClick={()=>dispatch({type:"DECREMENT",payload:1})}>-</button>
   <button onClick={()=>dispatch({type:"INCREMENT",payload:100})}>+</button>
    </div>
    </div>
  
    </>
  );
}

export default Counter1;
