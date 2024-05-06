import React, { useState } from 'react'
import Modal from './Modal'

export default function Condition() {
    const [active,setActive]= useState<boolean>(false)
    const handleClick=()=>{
        console.log("ăn vào hàm!");
        setActive(!active);
    }
  return (
    <div>
        Condition (điều kiện để render)
          {active ? <Modal></Modal>:""} <br />
        <button onClick={handleClick}>click</button>
    </div>
  )
}
