import React from 'react'
import './Styles.css'

function ShowForm(props) {
    var newdata=props.data;
   
   const handleShow =() =>{
    
   
   }
  return (
    <div className='show'>
 <button className='submitShow' onClick={handleShow}>Show Your Data</button>

 <div>
     <h1 className='name-show'>{newdata.name}</h1>
     <h4>Age: {newdata.age}</h4>
     <h4>Address: {newdata.address}</h4>
     <h4>Department : {newdata.department}</h4>
     <h4>Salary :  {newdata.salary }</h4>
     <h4>Married : 
        {newdata.married? "true" : "false"}
      </h4>
 </div>
    </div>
  )
}

export default ShowForm;
