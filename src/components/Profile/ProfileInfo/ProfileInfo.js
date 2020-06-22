import React from 'react';
import styles from './ProfileInfo.module.scss';
import Preloader from '../../common/Preloader/Preloader';

const ProfileInfo = (props) => {

	if (!props.profile) {
		return <Preloader />
	} else {

		let contacts = [];

		for (const key in props.profile.contacts) {
			if (props.profile.contacts.hasOwnProperty(key) && props.profile.contacts[key] !== null) {
				const element = props.profile.contacts[key];
				contacts.push(element);
			}
		}

		let contact = contacts.map(cont => <a href='#'> {cont} </a>);

		return (
			<div className={styles.profile}>
				{/* <div className={styles.profile__banner}></div> */}
				<div className={styles.profile__avatar}>
					<img src={props.profile.photos.small} alt="" />
				</div>
				<div className={styles.profile__info}>
					<div className={styles.profile__fullName}>{props.profile.fullName}</div>
					<div className={styles.profile__status}>{props.profile.aboutMe}</div>
					<div className={styles.profile__contacts}>
						{contact}
					</div>
					<div className={styles.profile__job}>
						<div>{props.profile.lookingForAJob}</div>
						<div>{props.profile.lookingForAJobDescription}</div>
					</div>
				</div>
			</div>
		)
	}

}

export default ProfileInfo;