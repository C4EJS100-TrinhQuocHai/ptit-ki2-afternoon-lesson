import { useReducer } from "react";

interface Todo {
    id: number,
    name: string,
    status: boolean

}
export default function UseReducerAdvanced() {
    /* 
      thực hành làm todolist dùng useReducer
     */
    // khai báo state trước
    const initial = {
        todos: [],
        isloading: false,
        todo: {
            id: 0,
            name: "",
            status: false,
        },
    }
    // khởi tạo hàm tạo action
    const action=(type:any,payload:any) :any=>{
        return {
            type:type,
            payload:payload
        }
    }
    // khởi tạo hàm reducer
    const reducer = (state :any= initial, action: any) => {
        switch (action.type) {
            case "CHANGE_INPUT":
                return { ...state, todo: { ...state.todo, name: action.payload}}
            case "ADD_TODO":
            //    state.todos.push(action.payload)
                return { ...state, todos: [...state.todos, { ...action.payload,id: Math.floor(Math.random() * 999999999 + new Date().getMilliseconds()) }]}
            default:
                return state;
        }   
    }
    const [state, dispatch] = useReducer(reducer, initial);
    //hàm lấy giá trị ô input
    const handleChange=(event:React.ChangeEvent<HTMLInputElement>)=>{
        let inputValue= event.target.value;
        dispatch(action("CHANGE_INPUT", inputValue));
    }
    // hàm thêm công việc
    const addTodo=()=>{
        dispatch(action("ADD_TODO",state.todo))
    }
    return (
        <div>
            UseReducerAdvanced
            <br />
            <input
             onChange={handleChange}
             type="text" />
            <button onClick={addTodo}>thêm công việc</button>
            <p>danh sách công việc</p>
            <ul>
                {
                    state.todos.map((item: Todo, index: number) => {
                        return <li key={item.id}>{item.name}</li>
                    })
                }
            </ul>
        </div>
    )
}
