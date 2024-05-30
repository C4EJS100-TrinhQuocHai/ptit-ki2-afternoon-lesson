import React from 'react'
import { useLocation } from 'react-router-dom'

export default function Login() {
    // dùng hook useLocation của react-router-dom cung cấp
    const location= useLocation();
        console.log("giá trị location",location);
        
  return (
    <div>
        Login <br />
        <label htmlFor="">email</label>
        <input type="text" /> <br />
        <label htmlFor="">pass</label>
        <input type="text" /> <br />
        <button>login</button>
    </div>
  )
}
