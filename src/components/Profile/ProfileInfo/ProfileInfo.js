import React from 'react';
import ava from '../../../assets/images/user-placeholder.png';
import styles from './ProfileInfo.module.scss';


const ProfileInfo = () => {
	return (
		<div className={styles.profile}>
			<div className={styles.profile__banner}></div>
			<div className={styles.profile__avatar}> 
				<img src={ava} alt="" />
			</div>
			<div className={styles.profile__info}></div>
		</div>
	)
}

export default ProfileInfo;