const initialState = {
	movieData: [],
	isLoading: false,
	isError: null,
};

const FETCH_MOVIEID = "FETCH_MOVIEID";
const FETCH_MOVIEID_SUCCESS = "FETCH_MOVIEID_SUCCESS";
const FETCH_MOVIEID_ERROR = "FETCH_MOVIEID_ERROR";

export const movieIDReducer = (state = initialState, action) => {
	switch (action.type) {
		case FETCH_MOVIEID:
			return { ...state, isLoading: true };
		case FETCH_MOVIEID_SUCCESS:
			return { ...state, isLoading: false, movieData: action.payload };
		case FETCH_MOVIEID_ERROR:
			return { ...state, isLoading: false, isError: action.payload };
		default:
			return state;
	}
};

export const fetchMovieID = () => ({ type: FETCH_MOVIEID });
export const fetchMovieIDSuccess = (payload) => ({ type: FETCH_MOVIEID_SUCCESS, payload });
export const fetchMovieIDError = (payload) => ({ type: FETCH_MOVIEID_ERROR, payload });
