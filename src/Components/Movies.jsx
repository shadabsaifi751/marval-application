import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { LatestMovies } from '../store/Action/Movies';
import Loader from "./Loader";

const style = {
    card: `border basis-1/4 border-Neutral-200 shadow rounded-sm overflow-hidden`,
    error: `text-center font-medium text-sm`,
    text: `text-sm font-medium p-3 h-12 overflow-hidden text-ellipsis`,
    loader: `column`
}

const Movies = () => {
    const [dataMarvel, setData] = useState([])
    const [Loading, setLoading] = useState(false)
    const [searchInput, setSearchInput] = useState('');

    const dispatch = useDispatch();
  const { Count, data, LatestMoviesDataLoading, LatestMoviesData, LatestMoviesDataSuccess, LatestMoviesDataError } = useSelector((state) => {
    return {
      LatestMoviesDataLoading: state.MovieData.latestMovies.loading,
      LatestMoviesDataError: state.MovieData.latestMovies.error,
      LatestMoviesDataSuccess: state.MovieData.latestMovies.success,
      LatestMoviesData: state.MovieData.latestMovies.data,
    }
  })

//   console.log( LatestMoviesData, "line33");

  useEffect(() => {
    dispatch(LatestMovies())
  },[LatestMovies,dispatch])

    function truncate(str) {
        return str.length > 18 ? str.substring(0, 18) + "..." : str;
    }
    // public key e84f571b00b8c70f7a2dc2c9d4cd22b8
    //private key a113856e5528662d4d297695b8c226de0f2d9d14

    //hash key ec974252ace78a5d4d0c2ad2992d3a91
    // shah1 key hash 183f676256a8d7e08ba95176ed6397e56b2db2b4



    // async function fetchData() {
    //   let response = await axios(
    //     `https://gateway.marvel.com/v1/public/comics?ts=1&apikey=e84f571b00b8c70f7a2dc2c9d4cd22b8&hash=ec974252ace78a5d4d0c2ad2992d3a91`
    //   );
    //   let user = await response.data;
    //   setData(user);
    // }
    // https://gateway.marvel.com/v1/public/characters?ts=1&apikey=e84f571b00b8c70f7a2dc2c9d4cd22b8&hash=ec974252ace78a5d4d0c2ad2992d3a91

      
//   const API_URL = 'https://api.themoviedb.org/3/movie/popular?api_key=d0c23e9309c4c34ce21eae28c7aaeb1c';
  const API_img = 'https://image.tmdb.org/t/p/w500'

    // const MarvelApi = async () => {
    //     setLoading(true)
    //     await fetch(API_URL)
    //         .then(response => response.json())
    //         .then(data => (
    //             setData(data.results),
    //             setLoading(false)
    //         ))
    //         .catch(err => setLoading(false));
    // }

    // useEffect(() => {
    //     MarvelApi();
    // }, []);

    const filterItem = !searchInput ? LatestMoviesDataSuccess &&LatestMoviesData : LatestMoviesDataSuccess && LatestMoviesData.filter(item => item.title.toLowerCase().includes(searchInput.toLowerCase()))


    // console.log(LatestMoviesData);
    return (
        <>
            <div className="section mt-28 mb-10">
                <div className="container mx-auto xl:px-4">
                    <div className="flex flex-wrap justify-between items-center mb-6">
                        <h4 className="text-xl lg:text-3xl font-semibold mb-5">LATEST MOVIES</h4>
                        <input type="search" placeholder="Search" onChange={(e) => setSearchInput(e.target.value)} className="py-2 px-2 w-80 text-red-500 bg-neutral-50 border outline-none border-red-500 rounded" />
                    </div>
                    {
                        LatestMoviesDataError ? (

                            <div className="flex justify-center items-center mt-5">
                            <h1>Network Error</h1>
                            </div>
                        ):""
                    }
                    <div className="flex flex-wrap items-center justify-center gap-4 min-h-[75vh]">
                        {LatestMoviesDataLoading ? <Loader className={style.loader} /> :
                            (
                                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6 lg:gap-8">
                                    {filterItem.length > 0 && filterItem.map((item) => (
                                        <Link to={`/detail/${item.id}`}>
                                        <div className={style.card} key={item.id}>
                                            <div className="overflow-hidden">
                                                <img src={API_img+item.backdrop_path} alt="" className="img-fluid w-full block h-64 object-cover" />
                                            </div>
                                            <h4 className={`${style.text} bg-Neutral-500 border-t-stone-300`}>{truncate(item.title)}</h4>
                                        </div>
                                        </Link>
                                    ))}
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Movies