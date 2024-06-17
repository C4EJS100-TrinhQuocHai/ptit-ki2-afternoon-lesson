// khởi tạo state
const initialCount:number=0;

// khởi tạo hàm reducerCount
 const reducerCount=(state=initialCount,action:any)=>{
    switch (action.type) {
        case "INCREASE":
            console.log("ăn vào increase");
            return state+action.payload
        case "DECREASE":
            return state-1
        default:
           return state;
    }
}
export default reducerCount;