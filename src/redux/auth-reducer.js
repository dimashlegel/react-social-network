const SET_USER_DATA = 'SET_USER_DATA';

const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';

let initinalState = {
	userID: null,
	email: null,
	login: null,
	isAuth: false,
	isFetching: false,
}

const authReducer = (state = initinalState, action) => {
	switch (action.type) {
		case SET_USER_DATA:
			return {
				...state,
				...action.data,
				isAuth: true
			}

		case TOGGLE_IS_FETCHING:
			return {
				...state,
				isFetching: action.isFetching,
			}

		default:
			return state;
	}

}

export const setAuthUserData = (userID, email, login) => ({ type: 'SET_USER_DATA', data: {userID, email, login} });
export const toggleIsFetching = (isFetching) => ({ type: 'TOGGLE_IS_FETCHING', isFetching });

export default authReducer;