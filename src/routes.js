import MovieCard from "./components/movieCard/MovieCard";
import Favorite from "./components/favorite/Favorite";
import MovieList from "./components/movieList/MovieList";
import Login from "./components/login/Login";
import SignUp from "./components/login/SignUp";

export const publicRoutes = [
	{
		path: "/",
		exact: true,
		component: <MovieList />,
	},
	{
		path: "/login",
		component: <Login />,
	},
	{
		path: "/register",
		component: <SignUp />,
	},
];

export const privateRoutes = [
	{
		path: "/",
		exact: true,
		component: <MovieList />,
	},
	{
		path: "/movie/:id",
		component: <MovieCard />,
	},
	{
		path: "/favorite",
		component: <Favorite />,
	},
];
