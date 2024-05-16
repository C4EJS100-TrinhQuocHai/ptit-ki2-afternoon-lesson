
import { createContext, useState } from 'react'
import A from './A'
export const SetUseContext=createContext("");
export default function UseContext() {
  const [name,setName]=useState<string>("minh thu");
  return (
    <div>
      UseContext
      {/* 
        đây là 1 hook 
        sinh ra giải quyết vấn đề gì?
        dùng như thế nào?
      */}
     <SetUseContext.Provider value={name}> 
        <A ></A>
      </SetUseContext.Provider>
    </div>
  )
}
