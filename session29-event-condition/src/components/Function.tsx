import React, { useState } from 'react'
interface User {
    username:string,
    email:string,
}
export default function Function() {
    // const [username, setUsername] = useState<string>("");
    // const [email,setEmail]=useState<string>("");
    const [user,setUser]=useState<User>({
        username:"",
        email:"",
    })
    // hàm xử lý khi click vào button
    const handleClick = () => {
        console.log(" hello!");
    }
    // gọi hàm theo kiểu truyền tham số
    const handleDelete = (userID: any) => {
        console.log("userID", userID);
    }
    // khai báo hàm đăng kí
    const register = () => {
        // console.log("đã ăn vào hàm đăng kí!", email,username);
        console.log("user đăng kí",user);
    }
     const handleChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
        let name= e.target.name;
        let value= e.target.value;
        console.log("name",name);
         console.log("value", value);

        
        setUser({
            ...user,[name]:value,
        })
     }
    // khai báo hàm handleChangeName
    // const handleChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    //     // console.log("111111",e.target.value);
    //     setUsername(e.target.value);
    // }
    // // khai báo hàm handleChangeEmail
    // const handleChangeEmail=(e:React.ChangeEvent<HTMLInputElement>)=>{
    //     setEmail(e.target.value)
    // }
    /* 
     QA : thầy muốn để 1 hàm cho tất ô input được không?
     làm như thế nào?
     */
    return (
        <div>
            Function
            <p onClick={() => handleDelete(5)}>hoa</p>
            <button onClick={handleClick}>click</button> <br />
            <label htmlFor="">username</label>
            <input
                onChange={handleChange}
                name="username"
                type="text" />
            <br />
            <label htmlFor="">email</label>
            <input
                name="email"
                onChange={handleChange}
                type="text" />
            <br />
            <button onClick={register}>register</button>
        </div>
    )
}
