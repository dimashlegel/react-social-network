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
			{ message: 'Hi', id: 1 },
			{ message: 'Hello', id: 2 },
			{ message: 'How are you?', id: 3 },
			{ message: 'OK', id: 4 },
		],
		dialogs: [
			{ name: 'Dima', id: 1 },
			{ name: 'Anna', id: 2 },
			{ name: 'Rulia', id: 3 },
			{ name: 'Alina', id: 4 },
		],
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

export default state;