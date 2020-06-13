import * as axios from 'axios';
import React from 'react';
import userPlaceholder from '../../assets/images/user-placeholder.png';
import styles from './Users.module.scss';

class Users extends React.Component {

	// constructor(props) {
	// 	super(props);
	// }

	componentDidMount() {
		axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
			this.props.setUsers(response.data.items);
			this.props.setTotalUsersCount(response.data.totalCount);
		});
	}

	onPageChanged = (pageNumber) => {
		this.props.setCurrentPage(pageNumber);
		axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
			this.props.setUsers(response.data.items);
		});
	}

	render() {
		let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
		let pages = [];

		for (let i = 1; i <= pagesCount; i++) {
			pages.push(i);
		};

		return (
			<div>
				<div>
					{pages.map((page) => {
						return <span className={this.props.currentPage === page ? styles.selectedPage : ''}
							onClick={() => this.onPageChanged(page)}>{page}</span>
					})}
				</div>
				{
					this.props.users.map((user) => (
						<div className={styles.user} key={user.id}>
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