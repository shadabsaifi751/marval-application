import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { increaseCounter, decreaseCounter } from "../store/Action/Counter/Action";
// import { fetchDataRequest, fetchDataSuccess, } from "../store/Action/Movies/Action";
import { fetchProducts } from "../store/Action/Movies/index";
// import img from "../Accects/img.png"
import Loader from './Loader';

const Hollywood = () => {
  const params = useParams()
  const [movies, setMovies] = useState([]);
  const [disabled, setDisabled] = useState(false)

  const dispatch = useDispatch();
  const { Count, data, MoviesDataLoading, MoviesData, MoviesDataSuccess, MoviesDataError } = useSelector((state) => {
    return {
      Count: state.Count,
      data: state.Count.count,
      success: state.Count.success,
      MoviesDataLoading: state.MovieData.loading,
      MoviesDataError: state.MovieData.error,
      MoviesDataSuccess: state.MovieData.success,
      MoviesData: state.MovieData.data,
    }
  })

  // console.log(MoviesDataLoading, MoviesDataSuccess, MoviesData, "line33");


  useEffect(() => {
    dispatch(fetchProducts())
  },[fetchProducts,dispatch])

  // console.log(Count,data,"line13")
  // const API_URL = 'https://api.themoviedb.org/3/movie/top_rated?api_key=d0c23e9309c4c34ce21eae28c7aaeb1c';
  // const API_img = 'https://image.tmdb.org/t/p/w500'
  // const API_VEDIO = `https://api.themoviedb.org/3/movie/${params.id}/videos?api_key=d0c23e9309c4c34ce21eae28c7aaeb1c`
  // useEffect(() => {
  //   fetch(API_URL)
  //     .then((res) => res.json())
  //     .then(data => {
  //       setMovies(data.results)
  //       console.log(data, "line112")
  //     })
  // }, [])

  // const { date, explanation, media_type, service_version, title, url } = item
  // console.log(movies, "line20video")
  const Increment = () => {
    if (data >= 0) {
      dispatch(increaseCounter(data))
    }
  }
  const Decrement = () => {
    if (data > 0) {
      setDisabled(false)
      console.log(disabled, "line46")
      dispatch(decreaseCounter(data))
    } else {
      console.log(disabled, "line50")
    }
  }
  const API_img = 'https://image.tmdb.org/t/p/w500'

  return (
    <>
      <div className="banner">
        <div className="mt-16 lg:pt-28 py-10 container mx-auto text-white">
          <h1 className="text-2xl md:text-4xl mb-3">bollywood Super Heroes</h1>
          <p className="text-sm md:text-xl font-light">All Your Favorite Stories and More. Start Streaming Now.</p>
        </div>


      </div>
      <div className="container mx-auto xl:px-4 min-h-[75vh]">

     {/*   <h1 className="mb-10 mt-10">{data}</h1>

        <button onClick={() => dispatch(Increment())} className="bg-slate-300 text-red-700 mr-3 border-r-8 p-2">Increment</button>
        <button onClick={() => dispatch(Decrement())} disabled={disabled} className="bg-slate-300 text-red-700 mr-3 border-r-8 p-2">decrement</button>
  */}


        {
          MoviesDataLoading && (
            <div>
              <Loader />
            </div>
          )
        }
        {
          MoviesDataError && (
            <div className="grid gap-10 grid-cols-12 sm:grid-cols-12 md:grid-cols-12 lg:grid-cols-12 mt-20 mb-20 h-4/6">
              <h5>Record not found</h5>
            </div>
          )
        }
        <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 mt-20 mb-20 h-4/6">
          {
            MoviesDataSuccess && MoviesData.length > 0 &&  MoviesData.map((item) => {
              return (
                <>
                <div className="h-full block mx-auto col-auto mb-3" key={item.id}>
                  <img src={API_img+item?.backdrop_path} className="img-fluid" alt="" />
                  <div className="flex flex-wrap justify-between py-2 px-2 bg-gray-900 border border-gray-100">
                    <span className="text-rose-200">Views {item.vote_count}</span><span className="text-rose-200">{item.popularity}</span>
                  </div>
                </div>
                <div className="mb-8">
                  <h5 className="mb-4 text-xl text-rose-600 col-span-2">{item.original_title ? item.original_title : "loding..."}</h5>
                  <h5 className="mb-4 text-rose-200">Rating {item.vote_average}</h5>
                  <div className="flex flex-wrap gap-4 items-center mb-5">
                    <p className="text-rose-600">{item.overview}</p>
                  </div>
                  <Link to={`/hollywood/${item.id}`} target="_blank" className='py-2 px-2 lg:py-2 lg:px-4 text-sm lg:text-lg bg-button rounded'  rel="noreferrer">Watch Trailer</Link>
                </div>
                </>
              )
            })
          }
        </div>
      </div>
    </>
  )

}

export default Hollywood



