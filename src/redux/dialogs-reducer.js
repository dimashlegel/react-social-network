const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';
const ADD_NEW_MESSAGE = 'ADD-NEW-MESSAGE';

const dialogsReducer = (state, action) => {
	switch (action.type) {
		case UPDATE_NEW_MESSAGE_TEXT:
			state.newMessageText = action.newMessage;
			break;

		case ADD_NEW_MESSAGE:
			let newMessage = {
				id: 1,
				message: state.newMessageText,
			}
			state.messages.push(newMessage);
			state.newMessageText = '';
			break;

		default:
			return state;

	}
	return state;
}

export const addMessageActionCreator = () => ({ type: 'ADD-NEW-MESSAGE' });
export const onMessageChangeActionCreator = (text) => ({ type: 'UPDATE-NEW-MESSAGE-TEXT', newMessage: text });

export default dialogsReducer;