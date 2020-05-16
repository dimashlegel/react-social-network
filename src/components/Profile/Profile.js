import React from 'react';
import classes from './Profile.module.scss';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';


const Profile = (props) => {

	return (
		<div className={classes.profile}>
			<ProfileInfo />
			<MyPosts posts={props.profilePage.posts} addPost={props.addPost} updateNewPostText={props.updateNewPostText} newPostText={props.profilePage.newPostText} />
		</div>)
}

export default Profile;