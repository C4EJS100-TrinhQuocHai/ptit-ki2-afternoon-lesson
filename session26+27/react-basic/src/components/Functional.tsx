import React from 'react'

export default function Functional() {
/* 
    Cách khai báo các kiểu dữ liệu và hiển thị chúng
 */
 let age :number=20;
 let fullName:string="minh thu";
 let myArrr: string[]=["hoa","hồng","ngọc","lan anh"];
 type Obj={
    name:string,
    age:number,
    address:string
 }
 let newStudent:Obj={
    name:"phuong",
    age:25,
    address:"hà nội"
 }
  return (
    <>
        Functional
        <p> xin chào {fullName}</p>
        <p> năm nay {fullName} {age} tuổi!</p>
        <ul>
            {myArrr.map((item,index)=>{
                return <li key={index}>{item}</li>
            })}
        </ul>
        {/* thầy muốn hiển thị object */}
        <p>{JSON.stringify(newStudent)}</p>

    </>
  )
}
