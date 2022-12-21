import React, { useEffect, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Link, useNavigate } from 'react-router-dom'
import "./LatestMovies.scss"
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


// import required modules
// import { Pagination, Navigation } from "swiper";
import { Pagination, Navigation, Autoplay } from "swiper";
import { PulseLoader, SyncLoader } from "react-spinners";
import { useDispatch, useSelector } from "react-redux";
import { UpcommingMovie } from "../store/Action/Movies";
const style = {
    card: `border basis-1/4 border-slate-600 shadow-lg overflow-hidden shadow-indigo-500/40 rounded`,
    error: `text-center font-medium text-sm`,
    text: `text-sm font-medium p-3`,
    loader: `column`
}
//gateway.marvel.com/v1/public/characters?ts=1&apikey=e84f571b00b8c70f7a2dc2c9d4cd22b8&hash=ec974252ace78a5d4d0c2ad2992d3a91

const UpcommingMovies = () => {
    const navigate = useNavigate()
    const [dataMarvel, setData] = useState([])
    const [Loading, setLoading] = useState(false)
    const [searchInput, setSearchInput] = useState('')


    const dispatch = useDispatch();
    const { Count, data, MoviesDataLoading, MoviesData, MoviesDataSuccess, MoviesDataError } = useSelector((state) => {
        return {
            MoviesDataLoading: state.MovieData.upcommingMovies.loading,
            MoviesDataError: state.MovieData.upcommingMovies.error,
            MoviesDataSuccess: state.MovieData.upcommingMovies.success,
            MoviesData: state.MovieData.upcommingMovies.data,
        }
    })

    //   console.log(MoviesDataLoading, MoviesDataSuccess, MoviesData, "line33");


    useEffect(() => {
        dispatch(UpcommingMovie())
    }, [UpcommingMovie, dispatch])

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



    // const API_URL = 'https://api.themoviedb.org/3/movie/upcoming?api_key=d0c23e9309c4c34ce21eae28c7aaeb1c';
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
                        <h4 className="text-base lg:text-2xl font-normal">Upcomming Movies</h4>
                        <button className="py-2 px-2 lg:py-1 lg:px-3 text-sm lg:text-sm bg-button rounded" onClick={handle}>More Movies</button>
                    </div>
                    <div className="relative latest-movies-wrap">
                        <Swiper
                            modules={[Navigation, Pagination, Autoplay]}
                            slidesPerView={1}
                            spaceBetween={30}
                            slidesPerGroup={5}
                            loop={true}
                            autoplay={{ delay: 5000 }}
                            loopFillGroupWithBlank={true}
                            pagination={false}
                            navigation={true}
                            className="mySwiper mt-7"
                            breakpoints={{
                                1280: {
                                    width: 1280,
                                    slidesPerView: 4,
                                    slidesPerGroup: 4
                                },
                                // when window width is >= 768px
                                768: {
                                    width: 768,
                                    slidesPerView: 2,
                                    slidesPerGroup: 1
                                },
                                640: {
                                    width: 640,
                                    slidesPerView: 2,
                                    slidesPerGroup: 2,
                                    spaceBetween: 10
                                },
                                320: {
                                    width: 320,
                                    slidesPerView: 1,
                                    slidesPerGroup: 1,
                                    spaceBetween: 10
                                },
                            }}
                        >
                            {
                                MoviesDataSuccess && MoviesData && MoviesData.length > 0 && (
                                    <>
                                        {
                                            MoviesData.map((item) => (
                                                <SwiperSlide>
                                                    <Link to={`/detail2/${item.id}`}>
                                                        <div className={`MovieCard relative ${style.card}`} key={item.id}>
                                                            <div className="">
                                                                <img src={API_img + item.backdrop_path} alt="" className=" h-40 w-full object-cover img-fluid" />
                                                            </div>
                                                            <div className="img-overlay hidden z-10 hover:backdrop-blur-sm h-full w-full hover:bg-[rgba(0,0,0,0.5)] absolute top-0 left-0 text-center items-center">
                                                                <h4 className={style.text}>{item.title}</h4>
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
                                MoviesDataLoading && (
                                    <>
                                        <div className="Loading flex justify-center items-center h-80 w-full">
                                            {/* <h1 className="text-center">Loading...</h1> */}
                                            <PulseLoader color="#c70000" />
                                        </div>
                                    </>
                                )
                            }
                        </Swiper>
                    </div>
                </div>
            </div>

        </>
    )
}

export default UpcommingMovies