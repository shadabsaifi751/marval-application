import React, { useEffect, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Link, useNavigate } from 'react-router-dom'

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


// import required modules
import { Pagination, Navigation } from "swiper";
import { PulseLoader, SyncLoader } from "react-spinners";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../store/Action/Movies";
const style = {
    card: `border basis-1/4 border-slate-600 shadow rounded`,
    error: `text-center font-medium text-sm`,
    text: `text-sm font-medium p-3`,
    loader: `column`
}
//gateway.marvel.com/v1/public/characters?ts=1&apikey=e84f571b00b8c70f7a2dc2c9d4cd22b8&hash=ec974252ace78a5d4d0c2ad2992d3a91

const PopularMovies = () => {
    const navigate = useNavigate()
    const [dataMarvel, setData] = useState([])
    const [Loading, setLoading] = useState(false)
    const [searchInput, setSearchInput] = useState('')

    const dispatch = useDispatch();
  const { Count, data, MoviesDataLoading, MoviesData, MoviesDataSuccess, MoviesDataError } = useSelector((state) => {
    return {
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

    // const MarvelApi = async () => {
    //     setLoading(true)
    //     await fetch(`https://movies-app1.p.rapidapi.com/api/movies`)
    //         .then(response => response.json())
    //         .then(data => (
    //             setData(data.data.results),
    //             setLoading(false)
    //         ))
    //         .catch(err => setLoading(false));

    // }

    // useEffect(() => {
    //     MarvelApi();

    // }, []);


    
    // const API_URL = 'https://api.themoviedb.org/3/movie/top_rated?api_key=d0c23e9309c4c34ce21eae28c7aaeb1c';
    const API_img = 'https://image.tmdb.org/t/p/w500'

    // useEffect(() => {
    //     fetch(API_URL)
    //   .then((res) => res.json())
    //   .then(data => {
    //     setData(data.results)
    //     setLoading(false)
    //     console.log(data, "line112")
    //   })

    // }, []);
    // console.log(dataMarvel, 'line17')

    const handle = () => {
        navigate('/movies')
    }
    return (
        <>
            <div className="section mt-16">
                <div className="container mx-auto xl:px-4">
                    <div className="flex justify-between">
                        <h4 className="text-xl lg:text-3xl font-normal">Popular Web Shows</h4>
                        <button className="py-2 px-2 lg:py-2 lg:px-4 text-sm lg:text-lg bg-button rounded" onClick={handle}>More Movies</button>
                    </div>
                    <div className="relative">
                        <Swiper
                            slidesPerView={5}
                            spaceBetween={25}
                            slidesPerGroup={5}
                            loop={true}
                            autoplay={true}
                            loopFillGroupWithBlank={true}
                            pagination={false}
                            navigation={true}
                            modules={[Pagination, Navigation]}
                            className="mySwiper mt-7"
                            breakpoints={{
                                // when window width is >= 640px
                                1280: {
                                    width: 1280,
                                    slidesPerView: 5,
                                    slidesPerGroup:5
                                },
                                // when window width is >= 768px
                                768: {
                                    width: 768,
                                    slidesPerView: 2,
                                    slidesPerGroup:1
                                },
                                640: {
                                    width: 640,
                                    slidesPerView: 2,
                                    slidesPerGroup:2,
                                    spaceBetween:50
                                },
                                320: {
                                    width: 320,
                                    slidesPerView: 2,
                                    slidesPerGroup:2,
                                    spaceBetween:50
                                },
                            }}
                        >
                            {
                                MoviesDataSuccess && MoviesData && MoviesData.length > 0 && (
                                    <>
                                        {
                                            MoviesData.map((item) => (
                                                <SwiperSlide key={item.id}>
                                                    <Link to={`/detail2/${item.id}`}>
                                                        <div className={style.card}>
                                                            <div className=" overflow-hidden">
                                                                <img src={API_img+item.backdrop_path} alt="" className=" h-80 w-full object-cover img-fluid" />
                                                            </div>
                                                        </div>
                                                    </Link>
                                                </SwiperSlide>
                                            ))
                                        }
                                    </>
                                )
                            }
                            {
                                MoviesDataLoading && 
                                (<div className="Loading flex justify-center items-center h-80 w-full">
                                    <PulseLoader color="#c70000" />
                                </div>)
                            }
                        </Swiper>
                    </div>
                </div>
            </div>

        </>
    )
}

export default PopularMovies