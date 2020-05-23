import React from 'react';
import styles from './Profile.module.scss';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';


const Profile = (props) => {
	return (
		<div className={styles.profile}>
			<ProfileInfo />
			<MyPosts profilePage={props.profilePage} dispatch={props.dispatch} />
		</div>)
}

export default Profile;