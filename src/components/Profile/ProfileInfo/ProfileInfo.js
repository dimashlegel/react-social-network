import React from 'react';
import ava from '../../../assets/images/user-placeholder.png';
import styles from './ProfileInfo.module.scss';
import Preloader from '../../common/Preloader/Preloader';

const ProfileInfo = (props) => {

	if (!props.profile) {
		return <Preloader />
	} else {
		return (
			<div className={styles.profile}>
				<div className={styles.profile__banner}></div>
				<div className={styles.profile__avatar}>
					<img src={ava} alt="" />
				</div>
				<div className={styles.profile__info}>
					<img src={props.profile.photos.large} alt="" />
				</div>
			</div>
		)
	}

}

export default ProfileInfo;