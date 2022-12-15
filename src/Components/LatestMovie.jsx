import React, { useEffect, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { LatestMovies } from '../store/Action/Movies';
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


// import required modules
import { Pagination, Navigation, Autoplay } from "swiper";
import { PulseLoader, SyncLoader } from "react-spinners";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
const style = {
    card: `border basis-1/2 md:basis-1/4 lg:basis-1/4  border-slate-600 shadow-sm rounded`,
    error: `text-center font-medium text-sm`,
    text: `text-sm font-medium p-3`,
    loader: `column`
}


const LatestMovie = () => {
    const navigate = useNavigate();
    const [dataMarvel, setData] = useState([]);
    const [Loading, setLoading] = useState(false);

    const dispatch = useDispatch();
    const { Count, data, LatestMoviesDataLoading, LatestMoviesData, LatestMoviesDataSuccess, LatestMoviesDataError } = useSelector((state) => {
        return {
            LatestMoviesDataLoading: state.MovieData.latestMovies.loading,
            LatestMoviesDataError: state.MovieData.latestMovies.error,
            LatestMoviesDataSuccess: state.MovieData.latestMovies.success,
            LatestMoviesData: state.MovieData.latestMovies.data,
        }
    })

    // console.log(LatestMoviesData, "line33");

    useEffect(() => {
        dispatch(LatestMovies())
    }, [LatestMovies, dispatch])

    // const MarvelApi = async () => {
    //     setLoading(true)
    //     // await fetch(`https://gateway.marvel.com/v1/public/characters?ts=1&apikey=e84f571b00b8c70f7a2dc2c9d4cd22b8&hash=ec974252ace78a5d4d0c2ad2992d3a91`)
    //     //     .then(response => response.json())
    //     //     .then(data => (
    //     //         setData(data.data.results),
    //     //         setLoading(false)
    //     //     ))
    //     //     .catch(err => setLoading(false));

    //     await fetch(`https://movie-details1.p.rapidapi.com/imdb_api/movie`, {
    //         params: { id: 'tt1375666' },
    //         headers: {
    //             'X-RapidAPI-Key': 'b16e30c9edmsh89646b21a8439a5p190f8fjsn536955941bac',
    //             'X-RapidAPI-Host': 'movie-details1.p.rapidapi.com'
    //         }
    //     })
    //         .then((res) => res.json())
    //         .then((dataMarvel) => (
    //             setData(dataMarvel),
    //             setLoading(false)
    //         ))
    //         .catch((err) => console.log(err))
    // }

    // useEffect(() => {
    //     MarvelApi();

    // }, []);


    // const axios = require("axios");


    // const API_URL = 'https://api.themoviedb.org/3/movie/popular?api_key=d0c23e9309c4c34ce21eae28c7aaeb1c';
    const API_img = 'https://image.tmdb.org/t/p/w500'

    // useEffect(() => {
    //     fetch(API_URL)
    //         .then((res) => res.json())
    //         .then(data => {
    //             setData(data.results)
    //             setLoading(false)
    //             console.log(data, "line112")
    //         })

    // }, []);
    // console.log(dataMarvel, 'line17')

    const handle = () => {
        navigate('/series')
    }
    return (
        <>
            <div className="section mt-16">
                <div className="container mx-auto xl:px-4">
                    <div className="flex justify-between">
                        <h4 className="text-xl lg:text-3xl font-normal">Trending In Movies</h4>
                        <button type="button" className="py-2 px-2 lg:py-2 lg:px-4 text-sm lg:text-lg bg-button rounded" onClick={handle}>More Movies</button>
                    </div>
                    <div className="relative">
                        <Swiper
                            modules={[Navigation, Pagination, Autoplay]}
                            slidesPerView={2}
                            spaceBetween={25}
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
                                    slidesPerView: 5,
                                    slidesPerGroup: 5
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
                                    spaceBetween: 50
                                },
                                320: {
                                    width: 320,
                                    slidesPerView: 2,
                                    slidesPerGroup: 2,
                                    spaceBetween: 50
                                },
                            }}
                        >
                            {LatestMoviesDataLoading &&
                                (<div className="Loading flex justify-center items-center h-80 w-full">
                                    <PulseLoader color="#c70000" />
                                </div>)
                            }
                            {
                                LatestMoviesDataSuccess && LatestMoviesData && LatestMoviesData.length > 0 && (
                                    <>
                                        {
                                            LatestMoviesData.map((item) => (
                                                <SwiperSlide>
                                                    <Link to={`/detail/${item.id}`}>
                                                        <div className={style.card} key={item.id}>
                                                            <div className="overflow-hidden">
                                                                <img src={API_img + item.backdrop_path} alt="" className=" h-80 w-full object-cover img-fluid" />
                                                            </div>
                                                            {/* <h4 className={style.text}>{item.title}</h4>
                                                        <p className=""></p> */}
                                                        </div>
                                                    </Link>
                                                </SwiperSlide>
                                            ))
                                        }
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

export default LatestMovie