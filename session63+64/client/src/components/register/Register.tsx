import React, { useEffect } from 'react'
import bcrypt from "bcryptjs-react";
export default function Register() {
    /* 
        .tạo form cho người dùng nhập
        lấy thông tin người dùng nhập
        khi gửi thông tin lên db.json
        phải kiểm tra  email có tồn tại hay không
        nếu có rồi báo email đã được đăng kí
        dùng truy vấn
        let email="hoa"
        axios.get(`http://localhost:8080/users?email_like=${email}`)
        ==> 2 kết quả trả về
        1. là []: chứng tỏ email chưa tồn tại trong bảng users
            + mã hóa mật khẩu rồi mới lưu
            - dùng thư viện bcrypt để mã hóa
            + lưu lên db.json
        2. là[{}]: chứng tỏ email đã tồn tại

     */
    useEffect(()=>{
        let pass:string="123456";
        bcrypt.hash(pass, 10, function (err, hash) {
            // Store hash in your password DB.
            // console.log(1111,hash);
            // let passB = "$2a$10$6PW7mN9knQbnubgU41Lt1.G329FkrjXqr5nUGAeAXQo64IoUAsEBy";
            // bcrypt.compare(pass,hash, (err, res) => {
            //     console.log("so sánh 2 mật khẩu", res);

            // })
            let user={

            }
            axios.post("url",user)
        });
     
        

    },[])
  return (
    <div>Register</div>
  )
}
