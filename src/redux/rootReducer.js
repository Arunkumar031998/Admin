import { combineReducers } from "redux";
import demoReducer from "./demo/demoReducer";



const rootreducer = combineReducers({
    demo: demoReducer,
})

export default rootreducer