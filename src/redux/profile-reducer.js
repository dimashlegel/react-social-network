const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initinalState = {
	posts: [
		{ id: 1, message: 'Hi, what are you doing?', likesCount: 1, },
		{ id: 2, message: 'I am rest', likesCount: 12, },
		{ id: 3, message: 'How are you?', likesCount: 3, },
		{ id: 4, message: 'OK', likesCount: 41, },
	],
	newPostText: '',
}

const profileReducer = (state = initinalState, action) => {
	// debugger;
	switch (action.type) {
		case ADD_POST: {
			let newPost = {
				id: 5,
				message: state.newPostText,
				likesCount: 0
			};
			let stateCopy = { ...state };
			stateCopy.posts = [...state.posts];			
			stateCopy.posts.push(newPost);
			stateCopy.newPostText = '';
			return stateCopy;
		}

		case UPDATE_NEW_POST_TEXT: {
			let stateCopy = { ...state };
			stateCopy.newPostText = action.newText;
			return stateCopy;
		}

		default:
			return state;
	}

}


export const addPostActionCreator = () => ({ type: 'ADD-POST' });
export const updateNewPostTextActionCreator = (text) => ({ type: 'UPDATE-NEW-POST-TEXT', newText: text });

export default profileReducer;