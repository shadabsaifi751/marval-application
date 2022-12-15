import { INCREMENT, DECREMENT,SUCCESS_DATA } from '../Action/Counter/ActionTypes';


const INITIAL_STATE = {
    count: 0,
    success:[]
};

const Counter = (state = INITIAL_STATE, action) => {

    switch (action.type) {
        case INCREMENT:
            return {
                ...state, count: state.count + 1,
            };
        case DECREMENT:
            return {
                ...state, count: state.count - 1,
            };
        case SUCCESS_DATA:
            return{
                ...state,
                count: payload
            }
        default: return state;
    }

};

export default Counter;