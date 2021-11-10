const initialState = {
	movies: [],
	isLoading: false,
	isError: null,
	page: 1,
	type: "",
	search: "Enemy",
	totalResults: 0,
};

const FETCH_MOVIES = "FETCH_MOVIES";
const FETCH_MOVIES_SUCCESS = "FETCH_MOVIES_SUCCESS";
const FETCH_MOVIES_ERROR = "FETCH_MOVIES_ERROR";
const FETCH_MOVIES_PAGES = "FETCH_MOVIES_PAGES";
export const SET_MOVIES_PAGE = "SET_MOVIES_PAGE";
export const SET_MOVIES_TYPE = "SET_MOVIES_TYPE";
export const SEARCH_MOVIE = "SEARCH_MOVIE";

export const moviesReducer = (state = initialState, action) => {
	switch (action.type) {
		case FETCH_MOVIES:
			return { ...state, isLoading: true };
		case FETCH_MOVIES_SUCCESS:
			return { ...state, isLoading: false, movies: action.payload };
		case FETCH_MOVIES_ERROR:
			return { ...state, isLoading: false, isError: action.payload };
		case FETCH_MOVIES_PAGES:
			return { ...state, totalResults: action.payload };
		case SET_MOVIES_PAGE:
			return { ...state, page: action.payload };
		case SET_MOVIES_TYPE:
			return { ...state, type: action.payload };
		case SEARCH_MOVIE:
			return { ...state, search: action.payload };
		default:
			return state;
	}
};

export const fetchMovies = () => ({ type: FETCH_MOVIES });
export const fetchMoviesSuccess = (payload) => ({ type: FETCH_MOVIES_SUCCESS, payload });
export const fetchMoviesError = (payload) => ({ type: FETCH_MOVIES_ERROR, payload });
export const fetchMoviesPages = (payload) => ({ type: FETCH_MOVIES_PAGES, payload });
