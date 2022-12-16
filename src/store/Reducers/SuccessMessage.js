import { SUCCESS_MSG_POPUP, ERROR_ACTION_TYPES } from '../Action/SuccessPopup/ActionTypes';


const INITIAL_STATE = {
    success: false,
    error: false,
};

const SuccessMessage = (state = INITIAL_STATE, action) => {

    switch (action.type) {
        case SUCCESS_MSG_POPUP.SET_SUCCESS:
            return {
                ...state,
                success: true,
                error: false
            };
        case SUCCESS_MSG_POPUP.HIDE_SUCCESS:
            return {
                ...state,
                success: true,
                error: false
            };
        case SUCCESS_MSG_POPUP.SUCCESS_TOAST:
            return {
                ...state,
                success: true,
                error: false
            }
        case ERROR_ACTION_TYPES.SET_ERROR:
            return {
                ...state,
                success: false,
                error: true
            }
        case ERROR_ACTION_TYPES.HIDE_ERROR:
            return {
                ...state,
                success: false,
                error: true
            }
        default: return state;
    }

};

export default SuccessMessage;