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
			newPostText: 'it-kamasutra.com',
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
			newMessageText: 'New message',
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

	// addPost() {
	// 	let newPost = {
	// 		id: 5,
	// 		message: this._state.profilePage.newPostText,
	// 		likesCount: 0
	// 	};
	// 	this._state.profilePage.posts.push(newPost);
	// 	this._state.profilePage.newPostText = '';
	// 	this._callSubscriber(this._state);
	// },
	// updateNewPostText(newText) {
	// 	this._state.profilePage.newPostText = newText;
	// 	this._callSubscriber(this._state);
	// },
	// updateNewMessageText(newMessage) {
	// 	this._state.dialogsPage.newMessageText = newMessage;
	// 	this._callSubscriber(this._state);
	// },
	// addNewMessage() {
	// 	let newMessage = {
	// 		id: 1,
	// 		message: this._state.dialogsPage.newMessageText,
	// 	}
	// 	this._state.dialogsPage.messages.push(newMessage);
	// 	this._state.dialogsPage.newMessageText = '';
	// 	this._callSubscriber(this._state);
	// },

	dispatch(action) {
		if (action.type === 'ADD-POST') {
			let newPost = {
				id: 5,
				message: this._state.profilePage.newPostText,
				likesCount: 0
			};
			this._state.profilePage.posts.push(newPost);
			this._state.profilePage.newPostText = '';
			this._callSubscriber(this._state);

		} else if (action.type === 'UPDATE-NEW-POST-TEXT') {
			this._state.profilePage.newPostText = action.newText;
			this._callSubscriber(this._state);

		} else if (action.type === 'UPDATE-NEW-MESSAGE-TEXT') {
			this._state.dialogsPage.newMessageText = action.newMessage;
			this._callSubscriber(this._state);

		} else if (action.type === 'ADD-NEW-MESSAGE') {
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

window.store = store;

export default store;