import React, { memo } from 'react'

interface Props{
    // count:number
    name:string,
    // count:number,
    increase:Function
}
 function Memo(props:Props) {
    console.log("component memo được gọi!");
    
  return (
    <div>Memo
        {/* 
            memo là gì?
             + HOC : higher order component - hàm bậc cao trong javascript
             + sẽ đi kiểm tra xem có props nào thay đổi hay không
                + nếu props(giá trị truyền vào từ cha xuống con) thay đổi thì componet sẽ render
                + nếu props không thay đổi thì không render.
             + chỉ cần 1 props thay đổi thì component sẽ được render theo chứ
                không phải là tất cả các props phải thay đổi thì mới render
            sinh ra giải quyết vấn đề gì?

         */}
    </div>
  )
}
export default memo(Memo);
