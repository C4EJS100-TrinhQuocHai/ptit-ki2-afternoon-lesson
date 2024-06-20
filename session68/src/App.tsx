import React, { useEffect, useState } from 'react'
import { Book } from './interface';
import { useDispatch, useSelector } from 'react-redux';
import { actionBook } from './actions';
export default function App() {
  // const [date, setDate] = useState<string>("");
  const [minDate, setMinDate] = useState<string>("");
  const [newMinDate, setNewMinDate] = useState<string>('');
  // const [books, setBooks] = useState<Book[]>([]);
  useEffect(() => {
    let newDate = new Date().toISOString().split("T")[0];
    setMinDate(newDate)

  }, []);
  const stateBook = useSelector((state: any) => {
    return state.bookReducer
  });
  const dispatch= useDispatch();
  console.log("stateBook", stateBook);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    let dateValue = event.target.value;
    console.log("giá trị date khi chọn", dateValue);
    setNewMinDate(dateValue);
  }
  // dùng useSelector đẩy lấy các cuốn sách ra.
  // hàm chọn select]
  const handleChangeSelect=(event:React.ChangeEvent<HTMLSelectElement>)=>{
    let valueSelect= event.target.value;
    // console.log("valueSelect",valueSelect);
    
    dispatch(actionBook("FILTER",valueSelect));
  }
  return (
    <div>App
      <br />
      <label htmlFor="">ngày mượn</label>
      <input type="date"
        onChange={handleChange}
        min={minDate}
      /> <br />
      <label htmlFor="">ngày trả</label>
      <input type="date"
        onChange={handleChange}
        min={newMinDate}
      />
      <select name="" id="" onChange={handleChangeSelect}>
        <option value="">lọc theo</option>
        <option value="true">đã trả</option>
        <option value="false">chưa trả</option>
      </select>
      <table>
        <thead>
          <tr>
            <th>STT</th>
            <th>Tên</th>
            <th>Trạng thái</th>
          </tr>
        </thead>
        <tbody>
          {stateBook.map((item:Book,index:number) => {
            return (
              <tr key={item.id}>
                <td>{index+1}</td>
                <td>{item.name}</td>
                <td>{item.status==="true"?<button>đã trả</button>:<button>chưa trả</button>}
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}
