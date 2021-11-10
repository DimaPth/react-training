import {SET_AUTH, SET_USER, SET_IS_LOADING, SET_IS_ERROR} from '../reducers/auth';

export const setIsAuth = (payload) => ({ type: SET_AUTH, payload });
export const setUser = (payload) => ({ type: SET_USER, payload });
export const setIsLoading = (payload) => ({ type: SET_IS_LOADING, payload });
export const setIsError = (payload) => ({ type: SET_IS_ERROR, payload });


