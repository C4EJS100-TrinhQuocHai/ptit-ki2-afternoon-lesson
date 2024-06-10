import axios from "axios";
import { useEffect } from "react";

export default function App() {

  /* useEffect(() => {
    // lấy tất cả bản ghi trong bảng users
    axios.get("http://localhost:8080/users")
      .then(res => console.log("giá trị data", res))
      .catch(err => console.log(err));
  }, []) */
  /* useEffect(() => {
    // lấy  một bản ghi trong bảng users 
    axios.get("http://localhost:8080/users/2")
      .then(res => console.log("giá trị data", res))
      .catch(err => console.log(err));
  }, []) */
  /*   useEffect(() => {
      // đi thêm mới bản ghi trong bảng users 
      let newUser = {
        name: "quỳnh",
        address: "vĩnh phúc"
      }
      axios.post("http://localhost:8080/users", newUser)
        .then(res => console.log("giá trị data", res))
        .catch(err => console.log(err));
    }, []) */
  /*  useEffect(() => {
     // đi xóa một bản ghi trong bảng users 
     axios.delete("http://localhost:8080/users/2")
       .then(res => console.log("giá trị data", res))
       .catch(err => console.log(err));
   }, []) */
  /*  useEffect(() => {
     // đi cập nhật một bản ghi trong bảng users 
     // PUT, PATCH
     // khi cập nhật phải biết id của bản ghi cần cập nhật
     let updateUser = {
       name: "minh quang"
     }
     axios.patch("http://localhost:8080/users/1", updateUser)
       .then(res => console.log("giá trị data", res))
       .catch(err => console.log(err));
   }, []) */
  /*  useEffect(() => {
     // tìm kiếm theo tên có chữ h ở trong thuộc tính name
     axios.get("http://localhost:8080/users?name_like=h")
       .then(res => console.log("giá trị data", res))
       .catch(err => console.log(err));
   }, []) */
  /*  useEffect(() => {
     // tìm kiếm thuộc tính name bắt đầu bằng kí tự
     axios.get("http://localhost:8080/users?name_like=h")
       .then(res => console.log("giá trị data", res))
       .catch(err => console.log(err));
   }, []) */
  /*  useEffect(() => {
     // lấy bảng users ra sắp xếp các đối tượng có thuộc tính name theo bảng chữ cái
     // tăng dần :  asc ( ascending-tăng dần)
     // giảm dần : desc  (descending-giảm dần)
     axios.get("http://localhost:8080/users?_sort=name&_order=asc")
       .then(res => console.log("giá trị data", res))
       .catch(err => console.log(err));
   }, []) */
  useEffect(() => {
    // nếu muốn phân trang
    // chia 1 trang có bao nhiêu bản ghi 
    axios.get("http://localhost:8080/users?_page=1&_limit=4")
      .then(res => console.log("giá trị data", res))
      .catch(err => console.log(err));
  }, [])
  return (
    <div>App</div>
  )
}
