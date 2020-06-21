import React from 'react';
import styles from './Users.module.scss';
import userPlaceholder from '../../assets/images/user-placeholder.png';
import { NavLink } from 'react-router-dom';

const Users = (props) => {
	// debugger;
	let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
	let pages = [];
	for (let i = 1; i <= pagesCount; i++) {
		pages.push(i);
	};

	return (<div>
		<div>
			{pages.map((page) => {
				return <span className={props.currentPage === page ? styles.selectedPage : ''}
					onClick={() => props.onPageChanged(page)}>{page}</span>
			})}
		</div>
		{
			props.users.map((user) => (
				<div className={styles.user} key={user.id}>
					<span className={styles.user__left}>
						<div className={styles.user__ava}>
							<NavLink to={`/profile/${user.id}`}>
								<img src={user.photos.small != null ? user.photos.small : userPlaceholder} alt="" />
							</NavLink>
						</div>
						<div className={styles.user__ava}>
							{user.followed
								? <button onClick={() => { props.unfollow(user.id) }}>Unfollow</button>
								: <button onClick={() => { props.follow(user.id) }}>Follow</button>
							}
						</div>
					</span>
					<span className={styles.user__right}>
						<span>
							<div>{user.name}</div>
							<div>{user.status}</div>
						</span>
						<span>
							<div>{'user.location.country'}</div>
							<div>{'user.location.city'}</div>
						</span>
					</span>
				</div >
			))
		}
	</div>
	)
}

export default Users;