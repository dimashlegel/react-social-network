import React from 'react';
import classes from './MyPosts.module.scss';
import Post from './Post/Post';

const MyPosts = (props) => {
	let postItems = props.posts.map(postItem => <Post message={postItem.post} likes={postItem.likesCount} />);

	let newPostElement = React.createRef();

	let addPost = () => {
		console.log(newPostElement.current.value);
	}

	return (
		<div className={classes.posts}>
			<h3>My Posts</h3>
			<div>
				<div>
					<textarea ref={newPostElement}></textarea>
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