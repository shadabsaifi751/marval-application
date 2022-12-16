import axios from "axios";
import { showSuccessPopup } from "../SuccessPopup";
import { fetchDataLoading, fetchDataSuccess, fetchDataError, latestMoviesDataLoading, latestMoviesDataSuccess, latestMoviesDataError, UpcommingMoviesDataSuccess, UpcommingMoviesDataLoading, UpcommingMoviesDataError, WebSeriesDataLoading, WebSeriesDataError, WebSeriesDataSuccess } from "./Action";

export function fetchProducts() {
  return dispatch => {
    dispatch(fetchDataLoading());
    axios
      .get(
        "https://api.themoviedb.org/3/movie/top_rated?api_key=d0c23e9309c4c34ce21eae28c7aaeb1c"
      )
      .then(response => {
        dispatch(fetchDataSuccess(response.data.results));
        // console.log(response.data.results,"line13")

        dispatch(
          showSuccessPopup("Data Successfull !")
        );
      })
      .catch(error => {
        dispatch(fetchDataError(error));
      });
  };
}

export function LatestMovies() {
  return dispatch => {
    dispatch(latestMoviesDataLoading());
    axios
      .get(
        "https://api.themoviedb.org/3/movie/popular?api_key=d0c23e9309c4c34ce21eae28c7aaeb1c"
      )
      .then(response => {
        dispatch(latestMoviesDataSuccess(response.data.results));
        // console.log(response.data.results,"line13")
      })
      .catch(error => {
        dispatch(latestMoviesDataError(error));
      });
  };
}

export function UpcommingMovie() {
  return dispatch => {
    dispatch(UpcommingMoviesDataLoading());
    axios
      .get(
        "https://api.themoviedb.org/3/movie/popular?api_key=d0c23e9309c4c34ce21eae28c7aaeb1c"
      )
      .then(response => {
        dispatch(UpcommingMoviesDataSuccess(response.data.results));
        // console.log(response.data.results,"line13")
      })
      .catch(error => {
        dispatch(UpcommingMoviesDataError(error));
      });
  };
}
export function WebSeries() {
  return dispatch => {
    dispatch(WebSeriesDataLoading());
    axios
      .get(
        "https://api.themoviedb.org/3/movie/now_playing?api_key=d0c23e9309c4c34ce21eae28c7aaeb1c"
      )
      .then(response => {
        dispatch(WebSeriesDataSuccess(response.data.results));
        // console.log(response.data.results,"line63")

      })
      .catch(error => {
        dispatch(WebSeriesDataError(error));
      });
  };
}