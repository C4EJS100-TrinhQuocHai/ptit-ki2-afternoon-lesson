import { useNavigate } from "react-router-dom"


export default function Register() {
    let navigate=useNavigate();
    const register=()=>{
        // lấy giá trị người dùng nhập vào
        // xử lý những tác vụ 
        // check ok hết (validate)
        // muốn chuyển sang trang login
        let user={
            email:"hoa@gmail.com",
            pass:123
        }
        navigate("/login",{state:user});
    }
  return (
    <div>Register <br />
        <label htmlFor="">email</label>
        <input type="text" /> <br />
        <label htmlFor="">pass</label>
        <input type="text" /> <br />
        <button onClick={register}>register</button>
    </div>
  )
}
