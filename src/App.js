import React, { useEffect } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import Navigation from './Components/Navigation';
import Movies from './Components/Movies';
import Home from './Components/Home';
import Series from './Components/Series';
import Hollywood from './Components/Hollywood';
import Bollywood from './Components/Bollywood';
import Footer from './Components/Footer';
import DetailPage from './Components/DetailPage';
import DetailPage2 from './Components/DetailPage2';
import LoginPage from './Pages/LoginPage';
import SignupPage from './Pages/SignupPage';
import ForgotPassword from './Pages/ForgotPassword';
import WecomePage from './Components/WecomePage';
import PrivateRoute from './Pages/PrivateRoute';
import PrivateOutlet from './Pages/PrivateRoute';
import { Error } from './Pages/Error';

function App() {
  const AuthToken = localStorage.getItem('token')

  // useEffect(() => {
  //   if (AuthToken) {
  //     Navigate('/home')
  //   } else {
  //     localStorage.removeItem('token')
  //     Navigate('/')
  //   }
  // }, [AuthToken])


  return (
    <>

      <BrowserRouter>
        <Navigation />
        <Routes>

          {
            AuthToken ? (
              <>
                <Route path="/" element={<Home />} />
                <Route path="movies" element={<Movies />} />
                <Route path="series" element={<Series />} />
                <Route path="hollywood" element={<Hollywood />} />
                <Route path="/hollywood/:id" element={<Hollywood />} />
                <Route path="bollywood" element={<Bollywood />} />
                <Route path="/detail/:id" element={<DetailPage />} />
                <Route path="/detail2/:id" element={<DetailPage2 />} />
              </>
            ) : (
              <>
                <Route path='/' element={<WecomePage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/signup" element={<SignupPage />} />
                <Route path="/forgotpassword" element={<ForgotPassword />} />
              </>
            )
          }
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
