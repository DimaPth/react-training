import MovieCard from "./components/movieCard/MovieCard";
import Favorite from "./components/favorite/Favorite";
import MovieList from "./components/movieList/MovieList";
import Login from "./components/login/Login";
import SignUp from "./components/login/SignUp";

export const publicRoutes = [
	{
		path: "/react-training/",
		exact: true,
		component: <MovieList />,
	},
	{
		path: "/react-training/login",
		component: <Login />,
	},
	{
		path: "/react-training/register",
		component: <SignUp />,
	},
];

export const privateRoutes = [
	{
		path: "/react-training/",
		exact: true,
		component: <MovieList />,
	},
	{
		path: "/react-training/movie/:id",
		component: <MovieCard />,
	},
	{
		path: "/react-training/favorite",
		component: <Favorite />,
	},
];
