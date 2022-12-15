import { bindActionCreators } from "@reduxjs/toolkit";
import { LOGIN_ERROR, LOGIN_LOADING, LOGIN_SUCCESS, SIGNUP_ERROR, SIGNUP_LOADING, SIGNUP_SUCCESS } from "../../Action/LoginSignup/ActionTypes";


const loginSignupstate = {
    login: {
        data: [],
        loading: false,
        success: false,
        error: false
    },
    signup: {
        data: [],
        loading: false,
        success: false,
        error: false
    }
};


const LoginSignUpReducer = (state = loginSignupstate, action) => {
    switch (action.type) {
        case LOGIN_LOADING:
            return {
                ...state,
                login: {
                    // ...state.login,
                    data: [],
                    loading: true,
                    success: false,
                    error: false
                }
            };
        case LOGIN_SUCCESS:
            return {
                ...state,
                login: {
                    // ...state.login,
                    data: payload.action.data,
                    loading: false,
                    success: true,
                    error: false
                }
            };
        case LOGIN_ERROR:
            return {
                ...state,
                login: {
                    // ...state.login,
                    data: [],
                    loading: false,
                    success: false,
                    error: true
                }
            };
        case SIGNUP_LOADING:
            return {
                ...state,
                signup: {
                    // ...state.signup,
                    data: [],
                    loading: true,
                    success: false,
                    error: false
                }
            };
        case SIGNUP_SUCCESS:
            return {
                ...state,
                signup: {
                    // ...state.signup,
                    data: payload.action.data,
                    loading: false,
                    success: true,
                    error: false
                }
            };
        case SIGNUP_ERROR:
            return {
                ...state,
                signup: {
                    // ...state.signup,
                    data: [],
                    loading: false,
                    success: false,
                    error: true
                }
            };
        default:
            break;
    }
}

export default LoginSignUpReducer;