// khởi tạo giá trị state
import { Book, Action } from "../../interface";
// giá trị mảng book khởi tạo ban đầu
// const initialBook:Book[] =JSON.parse(localStorage.getItem("books")||"[]");
let initialBook = [
    {
        id: 1,
        status: "true",
        name: "nhà giả kim",
    },
    {
        id: 2,
        status: "false",
        name: "đắc nhân tâm",
    },
    {
        id: 3,
        status: "true",
        name: "dạy con làm giàu",
    },
    {
        id: 4,
        status: "false",
        name: "cha giàu cha nghèo",
    },
];
// tạo hàm bookreducer
const bookReducer = (state = initialBook, action: Action) => {
    switch (action.type) {
        case "ADD":
            return state;
        case "FILTER":
            console.log("tiến hành lọc");
            let resultFilter = initialBook.filter((item) => {
                return item.status == action.payload;
            });
            return resultFilter;
        default:
            return state;
    }
};
export default bookReducer;
