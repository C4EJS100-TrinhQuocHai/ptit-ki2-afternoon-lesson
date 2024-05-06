import React, { useState } from 'react'
export default function StateFunction() {
    const [number,setNumber]=React.useState<number>(1);
    // khi dùng useState bắt buộc phải khai báo kiểu dữ liệu cho nó!
    const [fullName,setFulName]=useState<string>("minh thu");

    // hàm useState trả về 1 cái mảng bên trong mảng có 2 giá trị
    // 1 là giá trị 1, 2 là 1 cái hàm xử lý
    // khai báo hàm
    const handleClick=()=>{
        setNumber(number+1);
    }
    // khi muốn câp nhật state thì dùng set
  return (
    <div>
        StateFunction
        {/* 
        React ra đời năm 2013
        trước đó trong function không quản lý state được mà chỉ quản lý 
        state được ở bên trong class

        tháng 10/2018 : Hook ra đời bổ sung cho function có thể quản lý 
        state được useState;
         */}
        <p> giá trị number ban đầu {number}</p>
        <button onClick={handleClick}>tăng</button>
        <p> xin chào {fullName}</p>
    </div>
  )
}
