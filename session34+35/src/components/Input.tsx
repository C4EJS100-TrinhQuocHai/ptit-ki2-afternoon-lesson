import React, { useState } from 'react'
interface User{
    name:string,
    id:number,
    email:string
}
export default function Input() {
    const [user,setUser]=useState<User>({
        name:"",
        id:1,
        email:"",
    })
    const handleChange =(e:React.ChangeEvent<HTMLInputElement>)=>{
      let name= e.target.name;
      let value= e.target.value;
      setUser({...user,[name]:value});
    }
    console.log("giá trị name",user); 
  return (
    <div>
        <label htmlFor="">userName</label>
        <input
        name="name"
        onChange={handleChange}
        type="text"
         />
         <br />
         <label htmlFor="">email</label>
         <input 
         name="email"
         onChange={handleChange}
         type="text" />




    </div>
  )
}
