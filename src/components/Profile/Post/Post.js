import React from 'react';
import classes from './Post.module.scss';
import ava from './../../../images/user-placeholder.png';


const Post = () => {
	return (
		<div className={classes.item}>
			<img src={ava} alt=""/>
			<div>post 1</div>
		</div>
	)
}

export default Post;