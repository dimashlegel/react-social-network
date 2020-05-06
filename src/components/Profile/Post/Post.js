import React from 'react';
import classes from './Post.module.scss';
import ava from './../../../images/user-placeholder.png';


const Post = (props) => {
	return (
		<div className={classes.item}>
			<img src={ava} alt="" />
			{props.message}
			<div>like {props.likes}</div>
		</div>
	)
}

export default Post;