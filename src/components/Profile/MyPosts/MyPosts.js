import React from 'react';
import classes from './MyPosts.module.scss';
import Post from './Post/Post';

const MyPosts = (props) => {

	let postItems = props.posts.map(postItem => <Post message={postItem.message} likes={postItem.likesCount} />);
	let newPostElement = React.createRef();

	let onAddPost = () => {
		props.addPost();
	}

	let onPostChange = () => {
		let newText = newPostElement.current.value;
		props.updateNewPostText(newText);
		// props.dispatch(updateNewPostTextActionCreator(newText));
	}
 
	return (
		<div className={classes.posts}>
			<h3>My Posts</h3>
			<div>
				<div>
					<textarea ref={newPostElement} onChange={onPostChange} value={props.newPostText} placeholder="Enter new post" />
				</div>
				<div>
					<button onClick={onAddPost}>Add post</button>
				</div>
			</div>
			<div className={classes.post}>
				{postItems}
			</div>
		</div>)
}

export default MyPosts;