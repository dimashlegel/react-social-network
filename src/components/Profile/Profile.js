import React from 'react';
import styles from './Profile.module.scss';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';


const Profile = (props) => {
	return (
		<div className={styles.profile}>
			<ProfileInfo />
			<MyPosts posts={props.profilePage.posts} addPost={props.addPost} updateNewPostText={props.updateNewPostText} newPostText={props.profilePage.newPostText} />
		</div>)
}

export default Profile;