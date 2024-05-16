import React, { useState } from 'react'

export default function UseState() {
    //  cú pháp destructoring
    let cart=[
        {
            name:"iphone",
            price:5000,
            quantity:5,
        },
        {
            name: "iphone",
            price: 6000,
            quantity: 4,
        },
        {
            name: "iphone",
            price: 3000,
            quantity: 7,
        }
    ]
    const [name,setName]=useState<string>("minh thu");
    const [count,setCount]=useState<number>(0);
    const [price,setPrice]=React.useState<number>(()=>{
        return cart.reduce((curentValue, item) => {
            return curentValue + item.price * item.quantity;
        }, 0)
    });
    const handleClick=()=>{
        setCount(count+1);
        setCount(pre => pre + 1);
        setCount(25);
        // setCount(pre => pre + 1);
        // setCount(pre => pre + 1);
    }
    // sử dụng batch update
    console.log("component re-render");
  return (
    <div>UseState
        {/* 
            useState= use+state (sử dụng trạng thái)
            trạng thái của dữ liệu tức là khi dữ liệu thay đổi thì giao diện nó thay đổi
            theo
            các hook là các phương thức được React cung cấp cho nên khi sử dụng các em 
            phải import vào để dùng
            bản chất useState là 1 function trả về 1 cái [] có 2 phần tử.
            "minh thu", 0 được gọi là giá trị khởi tạo (initial-value)
            khi setCount thì component re-render lại
            - khi có nhiều useState giống nhau cùng chạy 1 lúc thì sẽ đưa hết các useState
            vào 1 cái queue (hàng đợi) để xử lý 
            - đối với kĩ thuật batch-update thì nó sẽ lấy giá trị trả về của useState trước
            làm giá trị tham số đầu vào của useState sau.
            - initial của useState 
             + truyền trực tiếp giá trị
             + dùng arrow-function để trả về kết quả.
         */}
         <p>giá trị biến đếm count: {count}</p>
         <button onClick={handleClick}>increase</button>
         <p>giá phải trả :{price}</p>
    </div>
  )
}
