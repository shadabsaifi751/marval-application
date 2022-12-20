import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import dummyfileimg from '../Accects/dummyfileimg.jpg'
import Loader from './Loader';

// const findPalette = id => LatestMovies.find(palette => palette.id == id);

const DetailPage2 = () => {
    const params = useParams();
    const [dataMarvel, setData] = useState([])
    const [Loading, setLoading] = useState(false)
    const [searchInput, setSearchInput] = useState('')

    // const axios = require("axios");

    const API_IMGID = `https://api.themoviedb.org/3/movie/${params.id}?api_key=d0c23e9309c4c34ce21eae28c7aaeb1c`;
    const API_img = 'https://image.tmdb.org/t/p/w500'

    useEffect(() => {
        fetch(API_IMGID)
            .then(res => res.json())
            .then(data => setData(data), setLoading(false))
            .catch((err) => alert(err))

    }, []);
    console.log(dataMarvel, 'shadab')

    const { backdrop_path, vote_count, budget, original_title, popularity, poster_path, overview, homepage, vote_average, release_date, status, tagline, title } = dataMarvel

    // const filterItem = !searchInput ? dataMarvel : dataMarvel.filter(item => item.title.toLowerCase().includes(searchInput.toLowerCase()))

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <section>
            <div className="container mx-auto xl:px-4">
                {
                    dataMarvel ?
                    <div class="py-3 mb-6 mt-32  h-screen">
                    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4 md:gap-4 lg:gap-2 shadow-lg border-gray-100 border sm:rounded-3xl p-8 md:space-x-8">
                        <div class="h-42 overflow-visible w-full">
                            <img src={API_img + backdrop_path ? API_img + backdrop_path : dummyfileimg} alt="" class="rounded-3xl shadow-lg h-full w-full object-cover" />
                        </div>
                        <div class="flex flex-col space-y-4">
                            <div class="flex justify-between items-start">
                                <h2 class="text-3xl font-bold">{original_title ? original_title : ''}</h2>
                                <div class="bg-yellow-400 font-bold rounded-xl p-2 text-gray-700"> {vote_average ? vote_average : ''}</div>
                            </div>
                            <h2 class="text-xl font-bold">{tagline ? tagline : ''}</h2>
                            <div>
                                <div class="text-sm text-gray-300">Series</div>
                                <div class="text-lg text-gray-300">{status} {release_date ? release_date : ''}</div>
                            </div>
                            <p class=" text-gray-400 max-h-40 overflow-y-hidden">{overview ? overview : ''}</p>
                            <div class="flex justify-between text-2xl font-bold mt-4">
                                <div>
                                    <a href={`${homepage}`} target="_blank" className='py-2 px-2 lg:py-2 lg:px-4 text-sm lg:text-md bg-transparent text-pink-50 border-pink-50 border rounded mr-3' rel="noreferrer">More Detail</a>
                                    <a href={`${homepage}`} target="_blank" className='py-2 px-2 lg:py-2 lg:px-4 text-sm lg:text-md bg-button rounded' rel="noreferrer">Watch Trailer</a>
                                </div>
                                ${vote_count}
                            </div>
                        </div>

                    </div>
                </div>  : <Loader />
                }
                {/*<div class="py-3 mb-6 mt-32  h-screen">
                    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4 md:gap-4 lg:gap-2 shadow-lg border-gray-100 border sm:rounded-3xl p-8 md:space-x-8">
                        <div class="h-42 overflow-visible w-full">
                            <img src={API_img + backdrop_path ? API_img + backdrop_path : dummyfileimg} alt="" class="rounded-3xl shadow-lg h-full w-full object-cover" />
                        </div>
                        <div class="flex flex-col space-y-4">
                            <div class="flex justify-between items-start">
                                <h2 class="text-3xl font-bold">{original_title ? original_title : ''}</h2>
                                <div class="bg-yellow-400 font-bold rounded-xl p-2 text-gray-700"> {vote_average ? vote_average : ''}</div>
                            </div>
                            <h2 class="text-xl font-bold">{tagline ? tagline : ''}</h2>
                            <div>
                                <div class="text-sm text-gray-300">Series</div>
                                <div class="text-lg text-gray-300">{status} {release_date ? release_date : ''}</div>
                            </div>
                            <p class=" text-gray-400 max-h-40 overflow-y-hidden">{overview ? overview : ''}</p>
                            <div class="flex justify-between text-2xl font-bold mt-4">
                                <div>
                                    <a href={`${homepage}`} target="_blank" className='py-2 px-2 lg:py-2 lg:px-4 text-sm lg:text-md bg-transparent text-pink-50 border-pink-50 border rounded mr-3' rel="noreferrer">More Detail</a>
                                    <a href={`${homepage}`} target="_blank" className='py-2 px-2 lg:py-2 lg:px-4 text-sm lg:text-md bg-button rounded' rel="noreferrer">Watch Trailer</a>
                                </div>
                                ${vote_count}
                            </div>
                        </div>

                    </div>
            </div> */}
            </div>
        </section>
    )
}

export default DetailPage2