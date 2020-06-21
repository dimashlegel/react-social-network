const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET-USER-PROFILE';

let initinalState = {
	posts: [
		{ id: 1, message: 'Hi, what are you doing?', likesCount: 1, },
		{ id: 2, message: 'I am rest', likesCount: 12, },
		{ id: 3, message: 'How are you?', likesCount: 3, },
		{ id: 4, message: 'OK', likesCount: 41, },
	],
	newPostText: '',
	profile: null,

}

const profileReducer = (state = initinalState, action) => {

	switch (action.type) {
		case ADD_POST:
			let newPost = { id: 5, message: state.newPostText, likesCount: 0 };
			return {
				...state,
				posts: [...state.posts, newPost],
				newPostText: '',
			}

		case UPDATE_NEW_POST_TEXT:
			return {
				...state,
				newPostText: action.newText,
			}

		case SET_USER_PROFILE:
			return {
				...state,
				profile: action.profile,
			}

		default:
			return state;
	}

}


export const addPostActionCreator = () => ({ type: ADD_POST });
export const updateNewPostTextActionCreator = (text) => ({ type: UPDATE_NEW_POST_TEXT, newText: text });
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile });

export default profileReducer;