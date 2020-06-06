import React from 'react';
import styles from './User.module.scss';
import userPlaceholder from '../../../assets/images/user-placeholder.png'

const User = (props) => {

	return (
		<div className={styles.user}>
			<span className={styles.user__left}>
				<div className={styles.user__ava}>
					<img src={props.photos.small != null ? props.photos.small : userPlaceholder} alt="" />
				</div>
				<div className={styles.user__ava}>
					{props.followed
						? <button onClick={() => { props.unfollow(props.id) }}>Unfollow</button>
						: <button onClick={() => { props.follow(props.id) }}>Follow</button>
					}
				</div>
			</span>
			<span className={styles.user__right}>
				<span>
					<div>{props.name}</div>
					<div>{props.status}</div>
				</span>
				<span>
					<div>{'props.location.country'}</div>
					<div>{'props.location.city'}</div>
				</span>
			</span>
		</div >
	)
}

export default User;