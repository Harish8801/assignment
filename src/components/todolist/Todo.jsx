
import React ,{ useState } from 'react';
 import './index.css';

import ToDoLists from './ToDoLists';




 const  Todo=()=>{

  const [inputList,setInputList]= useState("");

  const [Items,setItems]=useState([]);
  const itemEvent= (event) =>{

    setInputList(event.target.value); //target value yaha pr method h
  };
const listOfItems=()=>{
  setItems((oldItems)=>{
    return[...oldItems, inputList];
  });
  setInputList("");

};

  return (
    <>
    <div className="main_div">
    <div className='center_div'>
    <br/>
    <h1>To DO List</h1>
    <br/>
    <input type="text" placeholder='Add a item' value={inputList} onChange={itemEvent}/>
    <button  onClick={listOfItems}> + </button>
    <ol>
      {/* <li>{inputList}</li> */}
    {Items.map((itemvalue, index)=>{

        return <ToDoLists key={index} id={index} text={itemvalue}/>
      })}
    </ol>

    </div>
    
    </div>
    </>
  );
}

export default Todo;
