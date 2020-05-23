import React from 'react';
import classes from './MyPosts.module.scss';
import Post from './Post/Post';

const MyPosts = (props) => {

	let postItems = props.profilePage.posts.map(postItem => <Post message={postItem.message} likes={postItem.likesCount} />);

	let newPostElement = React.createRef();

	let addPost = () => {
		props.dispatch({ type: 'ADD-POST' });
	}

	let onPostChange = () => {
		// props.updateNewPostText(newPostElement.current.value);
		let newText = newPostElement.current.value;
		props.dispatch({ type: 'UPDATE-NEW-POST-TEXT', newText: newText });
	}
console.log(props);

	return (
		<div className={classes.posts}>
			<h3>My Posts</h3>
			<div>
				<div>
					<textarea ref={newPostElement} onChange={onPostChange} value={props.profilePage.newPostText} />
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