import { LOGIN_ERROR, LOGIN_LOADING, LOGIN_SUCCESS, SIGNUP_LOADING } from "./ActionTypes";

export function LoginLoading() {
    return {
        type: LOGIN_LOADING
    };
}

export function LoginSuccess(login) {
    return {
        type: LOGIN_SUCCESS,
        payload: login
    };
}

export function LoginError(error) {
    return {
        type: LOGIN_ERROR,
        payload: { error }
    };
}

export function SignUpLoading() {
    return {
        type: SIGNUP_LOADING
    };
}

export function SignUpSuccess(signup) {
    return {
        type: LOGIN_SUCCESS,
        payload: signup
    };
}

export function SignUpError(error) {
    return {
        type: LOGIN_ERROR,
        payload: { error }
    };
}