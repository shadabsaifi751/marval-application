import {MOVIES_DATA_LOADING,MOVIES_DATA_SUCCESS,MOVIES_DATA_ERROR, LATESTMOVIES_DATA_LOADING, LATESTMOVIES_DATA_SUCCESS, LATESTMOVIES_DATA_ERROR, UPCOMMING_MOVIES_DATA_LOADING, UPCOMMING_MOVIES_DATA_SUCCESS, UPCOMMING_MOVIES_DATA_ERROR, WEB_SERIES_DATA_LOADING, WEB_SERIES_DATA_SUCCESS, WEB_SERIES_DATA_ERROR} from './actionTypes'

export function fetchDataLoading() {
    return {
      type: MOVIES_DATA_LOADING
    };
  }

  export function fetchDataSuccess(payload) {
    return {
      type: MOVIES_DATA_SUCCESS,
      payload
    };
  }

  export function fetchDataError(error) {
    return {
      type: MOVIES_DATA_ERROR,
      payload: { error }
    };
  }
export function latestMoviesDataLoading() {
    return {
      type: LATESTMOVIES_DATA_LOADING
    };
  }

  export function latestMoviesDataSuccess(latestMovies) {
    return {
      type: LATESTMOVIES_DATA_SUCCESS,
      payload:latestMovies
    };
  }

  export function latestMoviesDataError(error) {
    return {
      type: LATESTMOVIES_DATA_ERROR,
      payload: { error }
    };
  }


  export function UpcommingMoviesDataLoading() {
    return {
      type: UPCOMMING_MOVIES_DATA_LOADING
    };
  }

  export function UpcommingMoviesDataSuccess(latestMovies) {
    return {
      type: UPCOMMING_MOVIES_DATA_SUCCESS,
      payload:latestMovies
    };
  }

  export function UpcommingMoviesDataError(error) {
    return {
      type: UPCOMMING_MOVIES_DATA_ERROR,
      payload: { error }
    };
  }

  export function WebSeriesDataLoading() {
    return {
      type: WEB_SERIES_DATA_LOADING
    };
  }

  export function WebSeriesDataSuccess(webSeries) {
    return {
      type: WEB_SERIES_DATA_SUCCESS,
      payload:webSeries
    };
  }

  export function WebSeriesDataError(error) {
    return {
      type: WEB_SERIES_DATA_ERROR,
      payload: { error }
    };
  }