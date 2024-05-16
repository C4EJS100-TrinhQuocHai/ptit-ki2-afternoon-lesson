import React, { useState } from 'react'

export default function Textarea() {
    const [text,setText]=useState<string>("");

    const handleChange=(e:React.ChangeEvent<HTMLTextAreaElement>)=>{
            setText(e.target.value);
    }
    console.log("1111",text);
    
  return (
    <div>
        Textarea
        <br />
        <textarea  name="" id="" onChange={handleChange}>

        </textarea>

    </div>
  )
}
