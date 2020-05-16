let state = {
	profilePage: {
		posts: [
			{ post: 'Hi, what are you doing?', id: 1, likesCount: 1, },
			{ post: 'I am rest', id: 2, likesCount: 12, },
			{ post: 'How are you?', id: 3, likesCount: 3, },
			{ post: 'OK', id: 4, likesCount: 41, },
		],
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

export default state;