import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

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
		return this._state;
	},
	subscribe(observer) {
		this._callSubscriber = observer;
	},

	dispatch(action) {
		
		this._state.profilePage = profileReducer(this._state.profilePage, action);
		this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
		this._state.sidebar = sidebarReducer(this._state.sidebar, action);

		this._callSubscriber(this._state);
	}

}

window.store = store;

export default store;