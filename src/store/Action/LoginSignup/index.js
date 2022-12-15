import { LoginError,LoginSuccess,LoginLoading } from "./Action";

// export function fetchLogin() {
//     return function(dispatch) {
//       return axios.post("http://localhost:4000/api/login")
//         .then(({ data }) => {
//         dispatch(LoginSuccess());
//       });
//     };
  
// }

export function LoginFunction() {
    return dispatch => {
      dispatch(LoginLoading());
      axios.post(
          "http://localhost:4000/api/login"
        )
        .then(response => {
          dispatch(LoginSuccess(response));
          console.log(response,"line63")
        })
        .catch(error => {
          dispatch(LoginError(error));
        });
    };
  }

export function SignUpFunction() {
    return dispatch => {
      dispatch(LoginLoading());
      axios.post(
          "http://localhost:4000/api/login/register"
        )
        .then(response => {
          dispatch(LoginSuccess(response));
          console.log(response,"line63")
        })
        .catch(error => {
          dispatch(LoginError(error));
        });
    };
  }