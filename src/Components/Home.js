import React, { useEffect } from 'react'
import Header from './Header'
import img from "../Accects/img.png"
import PopularMovies from './PopularMovies'
import UpcommingMovies from './Upcomming'
// import jwt from 'jsonwebtoken'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'
import LatestMovie from './LatestMovie'
// import GetUsers from '../';

const Home = () => {
  const dispatch= useDispatch();

  // const {data,loading,success} = useSelector((state)=>{
  //   return{
  //     data:state.initialState.Data
  //   }
  // })

  // console.log(data,"line21")
  // dispatch(GetUsers())

  // useEffect(()=>{
  //   dispatch(GetUsers())
  // },[])
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <Header />
      <LatestMovie />
      <PopularMovies />
      <UpcommingMovies />
      <div className="banner">
        <div className="mt-20 lg:pt-28 py-10 container mx-auto text-white mb-10">
          <img src={img} alt="" />
          <h1 className="text-2xl md:text-4xl mb-3">A Universe of Super Heroes</h1>
          <p className="text-sm md:text-xl font-light">All Your Favorite Stories and More. Start Streaming Now.</p>
        </div>
      </div>
    </>
  )
}

export default Home