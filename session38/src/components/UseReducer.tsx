import { useReducer } from "react";

export default function UseReducer() {
  // đi khai báo giá trị khởi tạo
  const initial:number=1;
  // khởi tạo hàm reducer
  const reducer=(state=initial,action:any)=>{
      switch (action.type) {
        case "INCREASE":
          return state+ action.payload
        case "DECREASE":
          return state -action.payload
        default:
         return state;
      }
  }
  /* 
    Đối với những action có dữ liệu phức tạp thì nên tạo 1 function

   */
  const action=(type:string,payload:number)=>{
    return {
      type:type,
      payload:payload
    }
  }
  // dùng destructoring để hứng lấy kết quả.
  const [count,dispatch] = useReducer(reducer,initial);
  // hàm xử lý tăng count
  const increase=()=>{
    dispatch(action("INCREASE",1))
  }
  // hàm xử lý giảm count
  const decrease = () => {
    dispatch(action("DECREASE", 1))
  }
  return (
    <div>UseReducer
      {/* 
        là 1 hook
        sinh ra để làm gì?
        1.sinh ra quản lý những state phức tạp
         + khi muốn quản lý state thì thường các em dùng useState (quản lý những
          state đơn giản thôi-
         )
         + về bản chất những gì useState làm được thì useReducer cũng làm được
         nhưng nó sẽ đi những state phức tạp hơn
        2. tiền đề sau này học redux(thư viện giúp tạo ra 1 kho chứa dữ liệu)
         
        cách dùng của nó?
        - nó là hook để dùng 
        B1: import nó vào
        B2: useReducer();
        nhận vào 2 tham số
        1. hàm reducer
        2. giá trị khởi tạo 

       */}
       <p> giá trị của biến count: {count}</p>
       <button onClick={increase}>tăng</button>
       <button onClick={decrease}>giảm</button>

    </div>
  )
}
