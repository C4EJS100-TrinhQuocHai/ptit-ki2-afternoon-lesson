import { createStore,combineReducers } from "redux";
import bookReducer from "./reducers/bookReducer";
const rootReducers = combineReducers({
    bookReducer,
});
const store= createStore(rootReducers);
export default store;