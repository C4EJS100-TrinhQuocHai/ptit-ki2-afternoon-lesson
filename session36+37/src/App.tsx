
import { useCallback, useState } from "react";
import Memo from "./components/Memo";
import UseContext from "./components/UseContext";
import UseEffect from "./components/UseEffect";
import UseRef from "./components/UseRef";
import UseCallback from "./components/UseCallback";
import UseMemo from "./components/UseMemo";

export default function App() {
  const [count,setCount]=useState<number>(0);
  const [name,setName]=useState<string>("hoa");

  const increase= useCallback(()=>{
    console.log("111111 số lần useCallback được gọi!");
    
     const handleIncrease = () => {
     }
     return handleIncrease
   },[])
  /* 
    khi mỗi lần function app re-render 
    thì lại tạo ra 1 biến handleIncrease và gán giá trị là 1 function
    function là kiểu dữ liệu tham chiếu reference-type
    cứ mỗi lần sẽ tạo biến mới là gán địa chỉ mới
   */
    
  return (
    <div>
      {/* 
       trong component App mỗi khi component re-render|| render lần đầu thì
       các component con sẽ render.
       */}
      App
      <p>giá trị của count {count}</p>
      <button onClick={()=>setCount(count+1)}>click memo </button>
      <UseEffect></UseEffect>
      <UseRef></UseRef>
      <UseContext></UseContext>
      <Memo increase={increase} name={name} />
      <UseCallback></UseCallback>
      <UseMemo></UseMemo>
    </div>
  )
}
