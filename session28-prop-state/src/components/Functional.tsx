import React from 'react'

interface Props{
    name:string,
    students:string[],
}
export default function Functional(props:Props) {
    console.log("111111",props);
    // thầy có thể dùng destructoring
    const {name}=props;
    const {students}=props;
  return (
    <div>Functional
        <p>xin chào {name} </p>
        {/* hiển thị danh sách sinh viên */}
        <ul>
            {students.map((item,index)=>{
                return <li key={index}>{item}</li>
            })}
        </ul>
    </div>
  )
}
