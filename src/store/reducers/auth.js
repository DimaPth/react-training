const initialState = {
	isAuth: false,
	isError: "",
	isLoading: false,
	user: {},
};

export const SET_AUTH = "SET_AUTH";
export const SET_USER = "SET_USER";
export const SET_IS_ERROR = "SET_IS_ERROR";
export const SET_IS_LOADING = "SET_IS_LOADING";

export const authReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_AUTH:
			return { ...state, isAuth: action.payload, isLoading: false };
		case SET_USER:
			return { ...state, user: action.payload };
		case SET_IS_ERROR:
			return { ...state, isError: action.payload, isLoading: false };
		case SET_IS_LOADING:
			return { ...state, isLoading: action.payload };
		default:
			return state;
	}
};
