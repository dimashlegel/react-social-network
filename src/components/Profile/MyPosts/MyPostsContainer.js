import React from 'react';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profile-reducer';
import MyPosts from './MyPosts';
import StoreContext from '../../../StoreContext';

const MyPostsContainer = () => {

	return (
		<StoreContext.Consumer>
			{
				(store) => {
					let state = store.getState();

					let addPost = () => {
						store.dispatch(addPostActionCreator());
					}

					let updateNewPostText = (newText) => {
						store.dispatch(updateNewPostTextActionCreator(newText));
					}
					return <MyPosts addPost={addPost} updateNewPostText={updateNewPostText} posts={state.profilePage.posts} newPostText={state.profilePage.newPostText} />
				}
			}
		</StoreContext.Consumer>
	)
}

export default MyPostsContainer;