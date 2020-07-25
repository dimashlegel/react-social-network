import usersApi from "../api/api";

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_TOTAL_USERS = "SET_TOTAL_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
const TOGGLE_FOLLOWING_IN_PROGRESS = "TOGGLE_FOLLOWING_IN_PROGRESS";

let initinalState = {
  users: [],
  pageSize: 15,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: true,
  followingInProgress: [],
};

const usersReducer = (state = initinalState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        // users: [...state.users],
        users: state.users.map((user) => {
          if (user.id === action.userId) {
            return { ...user, followed: true };
          }
          return user;
        }),
      };
    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map((user) => {
          if (user.id === action.userId) {
            return { ...user, followed: false };
          }
          return user;
        }),
      };

    case SET_USERS:
      return {
        ...state,
        users: action.users,
      };

    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.currentPage,
      };

    case SET_TOTAL_USERS:
      return {
        ...state,
        totalUsersCount: action.totalUsersCount,
      };

    case TOGGLE_IS_FETCHING:
      return {
        ...state,
        isFetching: action.isFetching,
      };

    case TOGGLE_FOLLOWING_IN_PROGRESS:
      return {
        ...state,
        followingInProgress: action.followingInProgress
          ? [...state.followingInProgress, action.userId]
          : state.followingInProgress.filter((id) => id !== action.userId),
      };

    default:
      return state;
  }
};

export const followSuccess = (userId) => ({ type: "FOLLOW", userId });
export const unfollowSuccess = (userId) => ({ type: "UNFOLLOW", userId });
export const setUsers = (users) => ({ type: "SET_USERS", users });
export const setTotalUsersCount = (totalUsersCount) => ({
  type: "SET_TOTAL_USERS",
  totalUsersCount,
});
export const setCurrentPage = (currentPage) => ({
  type: "SET_CURRENT_PAGE",
  currentPage,
});
export const toggleIsFetching = (isFetching) => ({
  type: "TOGGLE_IS_FETCHING",
  isFetching,
});
export const toggleFollowingProgress = (followingInProgress, userId) => ({
  type: "TOGGLE_FOLLOWING_IN_PROGRESS",
  followingInProgress,
  userId,
});

// thunks
export const getUsers = (currentPage, pageSize) => {
  return (dispatch) => {
    dispatch(toggleIsFetching(true));
    usersApi.getUsers(currentPage, pageSize).then((response) => {
      dispatch(toggleIsFetching(false));
      dispatch(setUsers(response.items));
      dispatch(setTotalUsersCount(response.totalCount));
    });
  };
};

export const follow = (usedId) => {
  return (dispatch) => {
		dispatch(toggleFollowingProgress(true, usedId));
		usersApi.follow(usedId).then((response) => {
			if (response.resultCode === 0) {
				dispatch(followSuccess(usedId));
			}
			dispatch(toggleFollowingProgress(false, usedId));
		});
  };
};

export const unfollow = (usedId) => {
  return (dispatch) => {
    dispatch(toggleFollowingProgress(true, usedId));
    usersApi.unfollow(usedId).then((response) => {
      if (response.resultCode === 0) {
        dispatch(unfollowSuccess(usedId));
      }
      dispatch(toggleFollowingProgress(false, usedId));
    });
  };
};

export default usersReducer;
