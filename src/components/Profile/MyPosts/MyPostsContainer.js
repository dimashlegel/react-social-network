import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profile-reducer';
import MyPosts from './MyPosts';
import {connect} from 'react-redux';
// const MyPostsContainer = () => {

// 	return (
// 		<StoreContext.Consumer>
// 			{
// 				(store) => {
// 					let state = store.getState();

// 					let addPost = () => {
// 						store.dispatch(addPostActionCreator());
// 					}

// 					let updateNewPostText = (newText) => {
// 						store.dispatch(updateNewPostTextActionCreator(newText));
// 					}
// 					return <MyPosts addPost={addPost} updateNewPostText={updateNewPostText} posts={state.profilePage.posts} newPostText={state.profilePage.newPostText} />
// 				}
// 			}
// 		</StoreContext.Consumer>
// 	)
// }

const mapStateToProps = (state) => {
	return {
		posts: state.profilePage.posts,
		newPostText: state.profilePage.newPostText,
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		addPost: () => dispatch(addPostActionCreator()),
		updateNewPostText: (newText) => dispatch(updateNewPostTextActionCreator(newText)),
	}
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;