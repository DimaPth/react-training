import axios from "axios";
import { fetchMovieID, fetchMovieIDError, fetchMovieIDSuccess } from "../reducers/movieID";

export const getMovieIDData = (id = "tt4154796") => {
	return async (dispatch) => {
		try {
			dispatch(fetchMovieID());
			const response = await axios.get("https://movie-database-imdb-alternative.p.rapidapi.com/", {
				params: {
					i: id,
				},
				headers: {
					"x-rapidapi-host": "movie-database-imdb-alternative.p.rapidapi.com",
					"x-rapidapi-key": "597c815aa4msh28d92088334d0eap1a133cjsnace39729c4ac",
				},
			});
			dispatch(fetchMovieIDSuccess(response.data));
		} catch (e) {
			dispatch(fetchMovieIDError("Ошибка"));
		}
	};
};
