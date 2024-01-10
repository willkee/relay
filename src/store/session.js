import { csrfFetch } from "./csrf";

// constants
const SET_USER = "session/SET_USER";
const REMOVE_USER = "session/REMOVE_USER";
const CREATE_USER = "session/CREATE_USER";

// action creators
const setUser = (user) => ({ type: SET_USER, user });
const removeUser = () => ({ type: REMOVE_USER });
const createUser = (user) => ({ type: CREATE_USER, user });

// thunks
export const login = (email, password) => async (dispatch) => {
	console.log(email, password, "redux");
	const res = await csrfFetch("/api/session", {
		method: "POST",
		body: JSON.stringify({ email, password }),
	});
	const data = await res.json();
	await dispatch(setUser(data.user));
};

export const signUp = (input) => async (dispatch) => {
	const { email, displayName, username, password, dob } = input;
	console.log(email, displayName, username, password, dob, "redux");

	const res = await csrfFetch("/api/v1/auth/register", {
		method: "POST",
		body: JSON.stringify({ email, displayName, username, password, dob }),
	});

	const data = await res.json();
	console.log(data, "data?");
	await dispatch(createUser(data.user));
};

// export const restoreUser = () => async (dispatch) => {
// 	const res = await csrfFetch("/api/session");
// 	const data = await res.json();
// 	await dispatch(setUser(data.user));
// };

export const logout = () => async (dispatch) => {
	await csrfFetch("/api/session", { method: "DELETE" });
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
