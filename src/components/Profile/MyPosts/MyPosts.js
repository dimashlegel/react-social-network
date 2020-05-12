import React from 'react';
import classes from './MyPosts.module.scss';
import Post from './Post/Post';


const MyPosts = (props) => {

	let postItems = props.postsData.map(postItem => <Post message={postItem.post} likes={postItem.likesCount} />)
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