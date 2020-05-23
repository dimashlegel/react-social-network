const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';
const ADD_NEW_MESSAGE = 'ADD-NEW-MESSAGE';
let store = {

	_callSubscriber() {
		console.log('state changed');
	},

	_state: {
		profilePage: {
			posts: [
				{ id: 1, message: 'Hi, what are you doing?', likesCount: 1, },
				{ id: 2, message: 'I am rest', likesCount: 12, },
				{ id: 3, message: 'How are you?', likesCount: 3, },
				{ id: 4, message: 'OK', likesCount: 41, },
			],
			newPostText: '',
		},
		dialogsPage: {
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
		},
		sidebar: {},
	},

	getState() {
		console.log('get state');
		return this._state;
	},
	subscribe(observer) {
		this._callSubscriber = observer;
	},

	dispatch(action) {
		if (action.type === ADD_POST) {
			let newPost = {
				id: 5,
				message: this._state.profilePage.newPostText,
				likesCount: 0
			};
			this._state.profilePage.posts.push(newPost);
			this._state.profilePage.newPostText = '';
			this._callSubscriber(this._state);

		} else if (action.type === UPDATE_NEW_POST_TEXT) {
			this._state.profilePage.newPostText = action.newText;
			this._callSubscriber(this._state);

		} else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
			this._state.dialogsPage.newMessageText = action.newMessage;
			this._callSubscriber(this._state);

		} else if (action.type === ADD_NEW_MESSAGE) {
			let newMessage = {
				id: 1,
				message: this._state.dialogsPage.newMessageText,
			}
			this._state.dialogsPage.messages.push(newMessage);
			this._state.dialogsPage.newMessageText = '';
			this._callSubscriber(this._state);
		}
	}

}


export const addPostActionCreator = () => ({ type: 'ADD-POST' });
export const updateNewPostTextActionCreator = (text) => ({ type: 'UPDATE-NEW-POST-TEXT', newText: text });
export const addMessageActionCreator = () => ({ type: 'ADD-NEW-MESSAGE' });
export const onMessageChangeActionCreator = (text) => ({ type: 'UPDATE-NEW-MESSAGE-TEXT', newMessage: text });

window.store = store;

export default store;