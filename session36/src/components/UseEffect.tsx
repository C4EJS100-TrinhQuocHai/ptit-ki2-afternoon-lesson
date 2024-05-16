import React, { useEffect, useState } from 'react'

export default function UseEffect() {
    const [count,setCount]=useState<number>(0);
    const [numbers,setNumbers]=useState<number[]>([]);
    const [active,setActive]=useState<boolean>(true);
    useEffect(()=>{
        console.log("đang gọi vào useEffect");
        
    },[count])
   const handleClick=()=>{
        setCount(count+1)
        /* 
            khi mỗi lần thầy click thì sẽ thêm 1 số bất kì vào mảng numbers
         */
        // tạo số ngẫu nhiên
        //    let randomNumber = Math.floor(Math.random() * 100);
        //    numbers.push(randomNumber);

        //    console.log("111",numbers);
        //    // kiểu dữ liệu mảng :
        //    // đi set lại state
        //    setNumbers([...numbers]);
       
   }
   console.log("component được re-render");
   // đi viết logic xử lý 
  return (
    <div>UseEffect
        {/* 
            tất cả các hook bản chất là những function
            khi dùng phải import để dùng
            useEffect nhận vào 2 đối số 
            1. là 1 callback (arrow function)
            2. [] || [deps]
            ==> useEffect sẽ có 3 cách dùng
            C1: chỉ chứa callback là 1 arrow function
                khi component được mount vào dom thì useEffect được gọi
                mỗi lần component re-render thì nó cũng được gọi
            C2: chứa callback,và []
                cũng được gọi sau khi component được mount vào dom
                khi mỗi lần component re-render thì useEffect sẽ không bị gọi lại
            C3: chứa cacllback, và [dependency-sự phụ thuộc]
                cũng được gọi sau khi component được mount vào dom
                khi dependency thay đổi thì useEffect được gọi
           useEffect là phương thức thường dùng để xử lý các tác vụ như callAPI để lấy 
           dữ liệu
           -Thường dùng để xử lý các side Effect (bên cạnh ảnh hưởng phụ thuộc )
            - componentDidMount 
            được gọi khi nào? sau khi component được render lần đầu 
        
        */}
        <p>giá trị count :{count}</p>
        <button onClick={handleClick}>click</button>

    </div>
  )
}
