import { MOVIES_DATA_LOADING, MOVIES_DATA_SUCCESS, MOVIES_DATA_ERROR, LATESTMOVIES_DATA_SUCCESS, LATESTMOVIES_DATA_LOADING, LATESTMOVIES_DATA_ERROR, UPCOMMING_MOVIES_DATA_LOADING, UPCOMMING_MOVIES_DATA_SUCCESS, UPCOMMING_MOVIES_DATA_ERROR, WEB_SERIES_DATA_LOADING, WEB_SERIES_DATA_SUCCESS, WEB_SERIES_DATA_ERROR } from '../../Action/Movies/actionTypes'

const INITIAL_STATE = {
    data: [],
    loading: false,
    success: false,
    error: false,

    latestMovies: {
        data: [],
        loading: false,
        success: false,
        error: false
    },
    upcommingMovies: {
        data: [],
        loading: false,
        success: false,
        error: false
    },
    webSeries: {
        data: [],
        loading: false,
        success: false,
        error: false
    }
};

const Movies = (state = INITIAL_STATE, action) => {

    switch (action.type) {
        case MOVIES_DATA_LOADING:
            return {
                ...state,
                data: [],
                loading: true,
                success: false,
                error: false
            };
        case MOVIES_DATA_SUCCESS:
            return {
                ...state,
                data: action.payload,
                loading: false,
                success: true,
                error: false
            };
        case MOVIES_DATA_ERROR:
            return {
                ...state,
                data: action.payload.error,
                loading: false,
                success: false,
                error: true
            }
        case LATESTMOVIES_DATA_LOADING:
            return {
                ...state,
                latestMovies: {
                    data: [],
                    loading: true,
                    success: false,
                    error: false
                }
            }
        case LATESTMOVIES_DATA_SUCCESS:
            return {
                ...state,
                latestMovies: {
                    data: action.payload,
                    loading: false,
                    success: true,
                    error: false
                }
            }
        case LATESTMOVIES_DATA_ERROR:
            return {
                ...state,
                latestMovies: {
                    data: action.payload.error,
                    loading: false,
                    success: false,
                    error: true
                }
            }
        case UPCOMMING_MOVIES_DATA_LOADING:
            return {
                ...state,
                upcommingMovies: {
                    data: [],
                    loading: true,
                    success: false,
                    error: false
                }
            }
        case UPCOMMING_MOVIES_DATA_SUCCESS:
            return {
                ...state,
                upcommingMovies: {
                    data: action.payload,
                    loading: false,
                    success: true,
                    error: false
                }
            }
        case UPCOMMING_MOVIES_DATA_ERROR:
            return {
                ...state,
                upcommingMovies: {
                    data: action.payload.error,
                    loading: false,
                    success: false,
                    error: true
                }
            }
            case WEB_SERIES_DATA_LOADING:
            return {
                ...state,
                webSeries: {
                    data: [],
                    loading: true,
                    success: false,
                    error: false
                }
            }
        case WEB_SERIES_DATA_SUCCESS:
            return {
                ...state,
                webSeries: {
                    data: action.payload,
                    loading: false,
                    success: true,
                    error: false
                }
            }
        case WEB_SERIES_DATA_ERROR:
            return {
                ...state,
                webSeries: {
                    data: action.payload.error,
                    loading: false,
                    success: false,
                    error: true
                }
            }
            
        default: return state;
    }

};

export default Movies;