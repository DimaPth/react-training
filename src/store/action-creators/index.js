import * as MoviesActionCreators from "./movies";
import * as MovieIDActionCreators from "./movieID";
import * as AuthActionCreators from "./auth";

export const ActionCreators = {
	...MoviesActionCreators,
	...MovieIDActionCreators,
	...AuthActionCreators,
};
