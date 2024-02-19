import { csrfFetch } from "./csrf";
import rootUrl from "./config";
// constants
const ADDED_FRIEND = "users/ADDED_FRIEND";
const REMOVED_FRIEND = "users/REMOVED_FRIEND";
const RETRIEVED_FRIENDS = "users/RETRIEVED_FRIENDS";

// action creators
const retrievedFriends = (data) => ({ type: RETRIEVED_FRIENDS, data });
const addedFriend = (data) => ({ type: ADDED_FRIEND, data });
const removedFriend = (data) => ({ type: REMOVED_FRIEND, data });

// thunks
const urlPrefix = `${rootUrl}/api/v1/users`;

export const getFriends = () => async (dispatch) => {
	await csrfFetch(`${urlPrefix}/friends`);
	await dispatch(retrievedFriends());
};
export const addFriend = () => async (dispatch) => {
	await csrfFetch(`${urlPrefix}/friends/add`);
	await dispatch(addedFriend());
};
export const removeFriend = () => async (dispatch) => {
	await csrfFetch(`${urlPrefix}/friends/remove`);
	await dispatch(removedFriend());
};

// reducer
const usersReducer = (state = { user: null }, action) => {
	const newState = { ...state };
	switch (action.type) {
		case ADDED_FRIEND: {
			return newState;
		}
		case REMOVED_FRIEND: {
			return newState;
		}
		case RETRIEVED_FRIENDS: {
			return newState;
		}
		default:
			return state;
	}
};

export default usersReducer;
