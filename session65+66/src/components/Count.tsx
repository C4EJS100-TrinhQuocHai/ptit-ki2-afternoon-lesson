import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { actionCount } from '../actions';
export default function Count() {
    // để lấy dữ liệu ở trong kho thì các e dùng useSelector()
    const stateCount:any= useSelector(state=>{
        return state;
    })
    console.log(11111, stateCount);
    
    // muốn bắn action (những hành động tương tác)
    //==> dùng useDispatch
    const dispatch= useDispatch();
    // console.log("!1111",stateCount);
    // useSelector nhiệm vụ là kiểm tra xem state có thay đổi hay không
    //thì cập nhật lại UI
    // những state phải thay đổi:
    //[...]
    const increase=()=>{
        dispatch(actionCount("INCREASE",5));
    }
  return (
    <div>Count
          <p>giá trị count :{stateCount.reducerCount} </p>
        <button onClick={increase}>tăng</button>
    </div>
  )
}
