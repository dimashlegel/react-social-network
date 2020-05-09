import React from 'react';
import classes from './MyPosts.module.scss';
import Post from '../Post/Post';


const MyPosts = () => {

	let postsData = [
		{ post: 'Hi, what are you doing?', id: 1, likesCount: 1, },
		{ post: 'I am rest', id: 2, likesCount: 12, },
		{ post: 'How are you?', id: 3, likesCount: 3, },
		{ post: 'OK', id: 4, likesCount: 41, },
	]

	let postItems = postsData.map(postItem => <Post message={postItem.post} likes={postItem.likesCount} />)
	return (
		<div className={classes.posts}>
			<h3>My Posts</h3>
			<div>
				<div>
					<textarea name="" id="" cols="30" rows="10"></textarea>
				</div>
				<div>
					<button>Add post</button>
				</div>
			</div>
			<div className={classes.post}>
				{postItems}
			</div>
		</div>)
}

export default MyPosts;