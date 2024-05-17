import React from 'react'

export default function UseCallback() {
  return (
    <div>UseCallback
        {/* 
            Đây là 1 hook trong reactjs
            cách dùng
            import {useCallback} from "react"
            useCallback(): nhận vào 2 đối số
            1. callback là arrow function 
                ==> đi xử lí logic
            2. [] ||[dependency]
            ==> khi nào dependency này thay đổi thì useCallback được gọi
            cũng tương tự useEffect
            
        */}
    </div>
  )
}
