import axios from "axios";
import {
	fetchMovies,
	fetchMoviesError,
	fetchMoviesPages,
	fetchMoviesSuccess,
	SEARCH_MOVIE,
	SET_MOVIES_PAGE,
	SET_MOVIES_TYPE,
} from "../reducers/movies";

export const getMovies = (search = "Enemy", page = 1, type = "") => {
	!search && (search = 'Enemy');
	return async (dispatch) => {
		try {
			dispatch(fetchMovies());
			const response = await axios.get('https://movie-database-alternative.p.rapidapi.com/', {
				params: {
					page: page,
					s: search,
					type: type,
				},
				headers: {
					'X-RapidAPI-Host': 'movie-database-alternative.p.rapidapi.com',
					'X-RapidAPI-Key': '597c815aa4msh28d92088334d0eap1a133cjsnace39729c4ac'
				},
			});
			dispatch(fetchMoviesSuccess(response.data.Response && response.data.Search));
			dispatch(fetchMoviesPages(Number(response.data.totalResults)));
		} catch (e) {
			dispatch(fetchMoviesError("Something gone wrong"));
		}
	};
};


export const setMoviesPage = (page) => ({ type: SET_MOVIES_PAGE, payload: page });
export const setMoviesType = (page) => ({ type: SET_MOVIES_TYPE, payload: page });
export const findMovie = (search) => ({ type: SEARCH_MOVIE, payload: search });