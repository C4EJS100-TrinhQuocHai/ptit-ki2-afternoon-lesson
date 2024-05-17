import { useEffect, useRef, useState } from "react";

export default function UseRef() {
    const [count, setCount] = useState<number>(0);
    const useRef1 = useRef(0);
    const forcusInput=useRef<HTMLInputElement>(null);
    console.log(22222,forcusInput);
    


    let index = 0;
    const handleClick = () => {
        index++;
        setCount(count + 1)
        useRef1.current = useRef1.current + 1;
    }
    console.log("giá trị index", useRef1.current);
    useEffect(()=>{
        forcusInput.current?.focus();
    },[])

    return (
        <div>
            UseRef
            {/* 
            Nó là hook react cung cấp
            Cách dùng: import vào dùng
            kết quả trả về của useRef là 1 đối tượng 
            và trong đối tượng đó có 1 thuộc tính mặc định là : current 

            Nó có 2 cách dùng chính
            1. khi mỗi lần component re-render thì nó không tạo ra 1 referentype mà 
            vẫn giữ nguyên giá trị referentype ban đầu
            2. giúp mặc định focus vào ô input mà mình muốn.
        */}
            <label htmlFor="">nhập email </label>
            <input type="text" /> <br />
            <label htmlFor="">nhập mật khẩu </label> 
            <input ref={forcusInput} type="text" />
            <button>login</button>
            <p>count:{count}</p>
            <button onClick={handleClick}>click</button>
        </div>
    )
}
