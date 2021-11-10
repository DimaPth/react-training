import { combineReducers } from "redux";
import { authReducer } from "./auth";
import { movieIDReducer } from "./movieID";
import { moviesReducer } from "./movies";

export const rootReducer = combineReducers({
	movies: moviesReducer,
	movieID: movieIDReducer,
	auth: authReducer,
});
