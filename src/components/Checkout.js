import { useState } from "react";



function Checkout({cart}) {

 

    const [userInput, setUserInput]= useState({
        firstName:"",
        lastName:"",
        email:"",
        zipCode:"",
        })

    
    function handleChange (e){
        setUserInput({
            ...userInput,
            [e.target.id]: e.target.value
        })
    }
    
      

    function handleSubmit (e){
        e.preventDefault()
       
        setUserInput({
        firstName:"",
        lastName:"",
        email:"",
        zipCode:"",
       })
       
       alert("You have puchased a diamond. Thank you!")
       
      }
    
    
      return (
        <div>
            <h2>Checkout</h2>
            <form onSubmit={handleSubmit}>
                <label>First Name</label>
                <input 
                name="fName" 
                id="firstName"
                type="text" 
                value={userInput.firstName}
                onChange ={handleChange}/>
               
               
                <label>Last Name</label>
                <input 
                name="lName" 
                id="lastName"
                type="text" 
                value={userInput.lastName}
                onChange ={handleChange}/>
               
               
                <label>Email</label>
                <input 
                name="email" 
                type="text" 
                id='email'
                value={userInput.email}
                onChange ={handleChange}/>
               
               
                <label>Zip Code</label>
                <input 
                name="zipCode" 
                type="text" 
                id='zipCode'
                value={userInput.zipCode}
                onChange ={handleChange}/>
                
                <button>submit</button>
            </form>
        </div>
    );
}

export default Checkout;