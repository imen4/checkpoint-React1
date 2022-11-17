import { INCREMENT, DECREMENT, INPUTINC} from "../actionsTypes/actionsTypes";
const initialState = {
    count:0
}
/*
const countReducer=(state=initialState,actions)=>{
    switch (actions.type) {
        case INCREMENT:
            return {...state,count: state.count+1}  
        case DECREMENT:
            return {...state,count:state.count-1}  
        default:
            return state;
    }
}*/
//destructuring actions
const countReducer=(state=initialState,{type,payload})=>{
    switch (type) {
        case INCREMENT:
            return {...state,count: state.count+1}  
        case DECREMENT:
            return {...state,count:state.count-1}  
        case INPUTINC:
            return {...state,count:state.count+payload}
        default:
            return state;
    }
}

export default countReducer