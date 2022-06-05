import React, { useReducer, } from "react";
import './style.css';

//reducer({counter:0},{type:"increment",payload:100})
//reducer({counter:0},{type:"decrement",payload:50})

const reducer=(state,action)=>{
  switch (action.type){
    case "INCREMENT":{
      return {...state,counter: state.counter+1};
    }
    case "DECREMENT":{
      return {...state,counter: state.counter-1}
    }
    default:{
      
      return state;
    }
  }
};

function Counter1() {
  const [state,dispatch]=useReducer(reducer,{counter:0});

 


  return (<>
    <div className="App">
    {/* React is controlling the value
    harish is controlling input element */}
    <h1> Counter:{state.counter}</h1>
   <div>
   <button onClick={()=>dispatch({type:"DECREMENT"})}>-</button>
   <button onClick={()=>dispatch({type:"INCREMENT"})}>+</button>
    </div>
    </div>
  
    </>
  );
}

export default Counter1;
