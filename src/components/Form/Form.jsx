import React, { useState } from 'react';
import ShowForm from './ShowForm';
import './Styles.css'
import swal from 'sweetalert';


function Form() {
    const [formData, setFormData] = useState({})


    const handleClick = (e) => {
        const inputName = e.target.name;

       
        if (e.target.type === 'checkbox') {
             

          
            setFormData({ ...formData, [inputName]: e.target.checked, });


        }
        else {
            setFormData({
                ...formData,
                [inputName]: e.target.value,
            });
        }


    };

    const handleSubmit = (e) => {
        e.preventDefault()
       


        swal({
            title: "Saved",
            text: "Data Is Saved you can see now",
            icon: "Success",
            button: "Thank You",
          });
    }
 



    return (
        <>
           <h1 className='heading'>Form Submit</h1>
           
        <div className='main-div'>
         
            <form onSubmit={handleSubmit} className='form' >
                <div className="grid" >
                    <label>Name : </label>
                    <input type="text" placeholder='Name' name='name' className='name' onChange={handleClick} />
                </div>
                <div className="grid">
                    <label>Age : </label>
                    <input type="text" placeholder='Age' name='age' className='name' onChange={handleClick} />
                </div>
                <div className="grid">
                    <label>Address : </label>
                    <input type="text" placeholder='Address' className='name' name='address' onChange={handleClick} />
                </div>
                <div className="grid">

                    <label>Department : </label>
                    <select name='department' onChange={handleClick} id='department'  className='name'>
                        <option value=" Front-end developer "> Front-end developer </option>
                        <option value=" Back end developer "> Back end developer</option>
                        <option value="Full stack developer">Full stack developer</option>
                    </select>
                </div>
                <div className="grid">
                    <label>Salary : </label>
                    <input type="number" placeholder='Salary' name='salary' onChange={handleClick} className='name' />
                </div>
                <div className="grid check" >
                    <label>marital state : </label>
                    <div>
                        <input type="checkbox" name="married" value="married" onChange={handleClick} />Married
                        <br />
                        <input type="checkbox" name='Unmarrid' value="unmarried" onChange={handleClick} />Unmarried
                    </div>


                </div>
                <div className="grid">
                    <input type="submit" className='submit'/>
                </div>



            </form>
            <div>
           
            <ShowForm data={formData}/>
            </div>
          

        </div>
        </>
    )
}

export default Form;
