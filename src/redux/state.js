import { rerenderEntireTree } from "../render";

let state = {
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
};

export let addPost = () => {
	let newPost = {
		id: 5,
		message: state.profilePage.newPostText,
		likesCount: 0
	};

	state.profilePage.posts.push(newPost);
	state.profilePage.newPostText = '';
	rerenderEntireTree(state);
}

export let updateNewPostText = (newText) => {
	state.profilePage.newPostText = newText;
	rerenderEntireTree(state);
}

export let updateNewMessageText = (newMessage) => {
	state.dialogsPage.newMessageText = newMessage;
	rerenderEntireTree(state);
}

export let addNewMessage = () => {
	let newMessage = {
		id: 1,
		message: state.dialogsPage.newMessageText,
	}
	state.dialogsPage.messages.push(newMessage);
	state.dialogsPage.newMessageText = '';
	rerenderEntireTree(state);
}

export default state;