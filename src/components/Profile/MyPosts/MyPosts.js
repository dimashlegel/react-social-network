import React from 'react';
import classes from './MyPosts.module.scss';
import Post from './Post/Post';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/state';

const MyPosts = (props) => {

	let postItems = props.profilePage.posts.map(postItem => <Post message={postItem.message} likes={postItem.likesCount} />);
	let newPostElement = React.createRef();

	let addPost = () => {
		props.dispatch(addPostActionCreator());
	}

	let onPostChange = () => {
		let newText = newPostElement.current.value;
		props.dispatch(updateNewPostTextActionCreator(newText));
	}

	return (
		<div className={classes.posts}>
			<h3>My Posts</h3>
			<div>
				<div>
					<textarea ref={newPostElement} onChange={onPostChange} value={props.profilePage.newPostText} placeholder="Enter new post" />
				</div>
				<div>
					<button onClick={addPost}>Add post</button>
				</div>
			</div>
			<div className={classes.post}>
				{postItems}
			</div>
		</div>)
}

export default MyPosts;