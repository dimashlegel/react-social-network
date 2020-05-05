import React from 'react';
import ava from './../../images/user-placeholder.png';
import classes from './Profile.module.scss';
import MyPosts from './MyPosts/MyPosts';


const Profile = () => {
	return (
		<div className={classes.profile}>
			<div className={classes.profile__banner}></div>
			<div className={classes.profile__main_info}>
				<div className={classes.profile__avatar}>
					<img src={ava} alt="" />
				</div>
				<div className={classes.profile__info}></div>
			</div>
			<MyPosts/>
		</div>)
}

export default Profile;