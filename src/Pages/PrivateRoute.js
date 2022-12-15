// import React,{useEffect} from 'react'
// import { Route,Navigate, useNavigate  } from 'react-router-dom';

// const PrivateOutlet = ({ children, ...rest }) => {
//   const navigate = useNavigate();

//   const AuthToken  = localStorage.getItem('token')
// //   useEffect(() => {
// //     const token = localStorage.getItem('token')
// //     if (token) {
// //       // const user = jwt.decode(token)
// //       const user = localStorage.setItem('token', token);
// //       console.log(user,"lne8888")
// //       if (!user) {
// //         localStorage.removeItem('token')
// //         // window.location.href = '/'
// //         console.log(user,token,"lne8888")
// //         navigate('/login',{ replace: true })
// //       }else{
// //         navigate('/home',{ replace: true })
// //       }
// //     }
// //   }, [navigate])
// useEffect(() => {
//         if (AuthToken) {
//             navigate('/home')
//         } else {
//             localStorage.removeItem('token')
//             navigate('/login')
//         }
//     }, [AuthToken, navigate])

  
// //   return (AuthToken ? children : <Navigate to="/login" />);
//   return (
//     <Route
//       {...rest}
//       render={() => AuthToken
//         ? children
//         : <Navigate to="/login" />
//       }
//     />
//   )
// }

// export default PrivateOutlet