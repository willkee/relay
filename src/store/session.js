import { csrfFetch } from "./csrf";
import {
	firebaseAuth,
	signInWithEmailAndPassword,
	signOut,
} from "../../Firebase";
import Cookies from "js-cookie";

// constants
const SET_USER = "session/SET_USER";
const REMOVE_USER = "session/REMOVE_USER";

// action creators
export const setUser = (user) => ({ type: SET_USER, user });
export const removeUser = () => ({ type: REMOVE_USER });

// thunks
export const login = (emailInput, password) => async (dispatch) => {
	// v2 using client based login:
	const { user } = await signInWithEmailAndPassword(
		firebaseAuth,
		emailInput,
		password
	);

	const token = await user.getIdToken();
	Cookies.set("id_token", token, { expires: 1 / 24 });

	const data = {
		uid: user.uid,
		email: user.email,
		displayName: user.displayName,
		phoneNumber: user.phoneNumber,
	};

	await dispatch(setUser(data));
	return data;
};

export const signUp = (input) => async (dispatch) => {
	const { email, displayName, username, password, dob, recaptcha } = input;

	const res = await csrfFetch("/api/v1/auth/register", {
		method: "POST",
		body: JSON.stringify({
			email,
			displayName,
			username,
			password,
			dob,
			token: recaptcha,
		}),
	});

	if (!res.success) throw new Error("Error in user creation.");

	const { user } = await signInWithEmailAndPassword(
		firebaseAuth,
		email,
		password
	);

	const data = {
		uid: user.uid,
		email: user.email,
		displayName: user.displayName,
		phoneNumber: user.phoneNumber,
	};

	const token = await user.getIdToken();
	Cookies.set("id_token", token, { expires: 1 / 24 });

	await dispatch(setUser(data));
	return data;
};

export const logout = () => async (dispatch) => {
	await signOut(firebaseAuth);
	dispatch(removeUser());
};

// reducer
const sessionReducer = (state = { user: null }, action) => {
	const newState = { ...state };
	switch (action.type) {
		case SET_USER: {
			newState.user = action.user;
			return newState;
		}
		case REMOVE_USER: {
			newState.user = null;
			return newState;
		}
		default:
			return state;
	}
};

export default sessionReducer;
