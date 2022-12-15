// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
// // const Movies = `top_rated?api_key=d0c23e9309c4c34ce21eae28c7aaeb1c`;


// // const ApiSlice=()=> {}
// export const apiDataSlice = createApi({
//   reducerPath: 'apiSlice',
//   baseQuery: fetchBaseQuery({
//     baseUrl: 'https://api.themoviedb.org/3/movie/top_rated?api_key=d0c23e9309c4c34ce21eae28c7aaeb1c',
//   }),
//   tagTypes: ['post'],
//   endpoints: (builder) => ({
//     getPosts: builder.query({
//       query: () => '',
//     }),
//   }),
// })

// export const moviesSlice = createApi({
//   reducerPath: 'moviesSlices',
//   baseQuery: fetchBaseQuery({
//     baseUrl: 'https://api.themoviedb.org/3/movie/now_playing?api_key=d0c23e9309c4c34ce21eae28c7aaeb1c',
//   }),
//   tagTypes: ['post'],
//   endpoints: (builder) => ({
//     getPosts: builder.query({
//       query: () => '',
//     }),
//   }),
// })

// export const { getMoviesApi } = moviesSlice;
// export const { useGetPostsQuery } = apiDataSlice;
