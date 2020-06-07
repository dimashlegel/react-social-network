import React from 'react';
import styles from './Post.module.scss';
import ava from '../../../../assets/images/user-placeholder.png';


const Post = (props) => {
	return (
		<div className={styles.item}>
			<img src={ava} alt="" />
			{props.message}
			<div>like {props.likes}</div>
		</div>
	)
}

export default Post;