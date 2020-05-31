import React from 'react';
import styles from './Profile.module.scss';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';


const Profile = (props) => {
	return (
		<div className={styles.profile}>
			<ProfileInfo />
			{/* store={props.store} */}
			<MyPostsContainer  />
		</div>)
}

export default Profile;