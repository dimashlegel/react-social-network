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
			<Post/>
			</div>
		</div>)
}

export default MyPosts;