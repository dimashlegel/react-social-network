import React from 'react';
import classes from './Profile.module.scss';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';


const Profile = (props) => {	
	return (
		<div className={classes.profile}>
			<ProfileInfo />
			<MyPosts postsData={props.postsData} />
		</div>)
}

export default Profile;