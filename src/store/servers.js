import {
	doc,
	db,
	getDoc,
	getDocs,
	collection,
	query,
	where,
} from "../../Firebase";

// constants
const SET_USER_SERVERS = "session/SET_USER_SERVERS";

// action creators
export const setUserServers = (serversArray) => ({
	type: SET_USER_SERVERS,
	serversArray,
});

// thunks
export const getUserServers = (uid) => async (dispatch) => {
	const document = await getDoc(doc(db, "userServers", uid)).catch((err) =>
		console.error(err)
	);

	if (document?.exists()) {
		const serverIds = document.data().servers;

		const serversArray = [];

		for (const serverId of serverIds) {
			const currentServer = {};

			const _serverRef = doc(db, "servers", serverId);
			const serverData = await getDoc(_serverRef).catch(() => {});

			if (serverData?.exists()) {
				const server = serverData.data();

				currentServer.serverId = serverId;
				currentServer.name = server.name;
				currentServer.icon = server.icon;
				currentServer.members = server.members;
				currentServer.channels = {};

				const channelQuery = query(
					collection(db, "channels"),
					where("serverId", "==", serverId)
				);

				const messagesQuery = query(
					collection(db, "messages"),
					where("serverId", "==", serverId)
				);

				const _channelRef = await getDocs(channelQuery).catch(() => {});
				const _msgRef = await getDocs(messagesQuery).catch(() => {});

				for (const ch of _channelRef.docs) {
					const { name, description } = ch.data();

					const channelMessages = _msgRef.docs
						.map((el) => el.data())
						.filter((el) => el.channelId === ch.id)
						.map((el) => ({
							userId: el.userId,
							content: el.content,
							createdAt: el.createdAt,
						}));

					currentServer.channels[ch.id] = {
						name,
						description,
						messages: channelMessages,
					};
				}
			}
			serversArray.push(currentServer);
		}

		await dispatch(setUserServers(serversArray));
		return serversArray;
	}
};

// reducer
const serversReducer = (state = {}, action) => {
	const newState = { ...state };
	switch (action.type) {
		case SET_USER_SERVERS:
			action.serversArray.forEach((el) => (newState[el.serverId] = el));
			return newState;
		default:
			return newState;
	}
};

export default serversReducer;
