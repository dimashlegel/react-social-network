const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';
const ADD_NEW_MESSAGE = 'ADD-NEW-MESSAGE';

let initinalState = {
	messages: [
		{ id: 1, message: 'Hi' },
		{ id: 2, message: 'Hello' },
		{ id: 3, message: 'How are you?' },
		{ id: 4, message: 'OK' },
	],
	dialogs: [
		{ id: 1, name: 'Dima' },
		{ id: 2, name: 'Anna' },
		{ id: 3, name: 'Rulia' },
		{ id: 4, name: 'Alina' },
	],
	newMessageText: '',
};

const dialogsReducer = (state = initinalState, action) => {
	switch (action.type) {
		case UPDATE_NEW_MESSAGE_TEXT: {
			let stateCopy = { ...state };
			stateCopy.newMessageText = action.newMessage;
			return stateCopy;
		}

		case ADD_NEW_MESSAGE: {
			let newMessage = {
				id: 1,
				message: state.newMessageText,
			}
			let stateCopy = { ...state };
			stateCopy.messages = [...state.messages];			
			stateCopy.messages.push(newMessage);
			stateCopy.newMessageText = '';
			return stateCopy;
		}
		default:
			return state;
	}
}

export const addMessageActionCreator = () => ({ type: 'ADD-NEW-MESSAGE' });
export const onMessageChangeActionCreator = (text) => ({ type: 'UPDATE-NEW-MESSAGE-TEXT', newMessage: text });

export default dialogsReducer;