import React, { useState } from 'react';


const Counter=()=> {
const [count,setCount]=useState(0);

//   let newbun=count%2==0 ? 

const incrementCount=()=>{
    setCount(count+1);
};

const decrementCount=()=>{
    setCount(count-1);
}


const dauble=()=>{
    setCount(count*2);
}


  return (
    <div>
    <h1>Counter App</h1>
    <h2>Counter Value {count}</h2>
        <button onClick={incrementCount}>Increment</button>
        <button onClick={decrementCount}>Decrement</button>
        <button onClick={dauble}>Double</button>
    </div>
  )
}

export default Counter