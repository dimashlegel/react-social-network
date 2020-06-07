import * as axios from 'axios';
import React from 'react';
import userPlaceholder from '../../assets/images/user-placeholder.png';
import styles from './Users.module.scss';

class Users extends React.Component {

	constructor(props) {
		super(props);
		// if (this.props.users.length === 0) {
		axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
			this.props.setUsers(response.data.items);
		});
		// }
	}

	getUsers = () => { };

	render() {
		return (
			<div>
				{/* <button onClick={this.getUsers}>Get Users</button> */}
				{
					this.props.users.map((user) => (
						<div className={styles.user}>
							<span className={styles.user__left}>
								<div className={styles.user__ava}>
									<img src={user.photos.small != null ? user.photos.small : userPlaceholder} alt="" />
								</div>
								<div className={styles.user__ava}>
									{user.followed
										? <button onClick={() => { this.props.unfollow(user.id) }}>Unfollow</button>
										: <button onClick={() => { this.props.follow(user.id) }}>Follow</button>
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
}

export default Users;