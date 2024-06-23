// khởi tạo state
import { createSlice } from "@reduxjs/toolkit";
const countState: number = 0;

const countReducer = createSlice({
    name: "countCeducer",
    initialState: countState,
    reducers: {
        // đây là những action
        increase: (state) => state += 1,
        decrease: (state) => state -= 1,
    },
});
// xuất ra những action
export const { increase, decrease } = countReducer.actions;
// xuất ra thằng reducer count
export default countReducer.reducer;
