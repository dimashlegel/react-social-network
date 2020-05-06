import React from 'react';
import classes from './MyPosts.module.scss';
import Post from '../Post/Post';


const MyPosts = () => {
	return (
		<div className={classes.posts}>
			My Posts
			<div>
				<textarea name="" id="" cols="30" rows="10"></textarea>
				<button>Add post</button>
			</div>
			<div>
			<Post message='Hi' likes='1' />
			<Post message='Hello' likes='5' />
			</div>
		</div>)
}

export default MyPosts;