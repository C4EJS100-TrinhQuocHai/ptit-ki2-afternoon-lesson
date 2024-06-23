import { useDispatch, useSelector } from "react-redux";
import { increase } from "../store/reducers/CountReducer";


export default function Count() {
    const state:any = useSelector(state => state);
    const dispatch= useDispatch();
  return (
    <div>Count
      <p> giá trị count: {state.count1111}</p>
      <button onClick={()=>dispatch(increase())}>tăng</button>
    </div>
  )
}
