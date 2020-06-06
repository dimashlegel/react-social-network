import React from 'react';
import styles from './User.module.scss';

const User = (props) => {
	// console.log(props);
	
	return (
		<div className={styles.user}>
			<span className={styles.user__left}>
				<div className={styles.user__ava}>
					<img src={props.photoUrl} alt="" />
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
					<div>{props.fullname}</div>
					<div>{props.status}</div>
				</span>
				<span>
					<div>{props.location.country}</div>
					<div>{props.location.city}</div>
				</span>
			</span>
		</div >
	)
}

export default User;