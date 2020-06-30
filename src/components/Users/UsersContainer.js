import React from 'react';
import { connect } from 'react-redux';
import { follow, setCurrentPage, setTotalUsersCount, setUsers, unfollow, toggleIsFetching } from '../../redux/users-reducer';
import Users from './Users';
import Preloader from '../common/Preloader/Preloader';
import usersApi from '../../api/api';


class UsersContainer extends React.Component {

	componentDidMount() {
		this.props.toggleIsFetching(true);
		usersApi.getUsers(this.props.currentPage, this.props.pageSize).then(response => {
			this.props.toggleIsFetching(false);
			this.props.setUsers(response.items);
			this.props.setTotalUsersCount(response.totalCount);
		});
	}

	onPageChanged = (pageNumber) => {
		this.props.setCurrentPage(pageNumber);
		this.props.toggleIsFetching(true);
		usersApi.getUsers(pageNumber, this.props.pageSize).then(response => {
			this.props.toggleIsFetching(false);
			this.props.setUsers(response.items);
		});
	}

	render() {
		return <>
			{this.props.isFetching ? <Preloader /> : null}
			<Users
				totalUsersCount={this.props.totalUsersCount}
				pageSize={this.props.pageSize}
				currentPage={this.props.currentPage}
				users={this.props.users}
				follow={this.props.follow}
				unfollow={this.props.unfollow}
				onPageChanged={this.onPageChanged}
			/>
		</>
	}
}

let mapStateToProps = (state) => {
	return {
		users: state.usersPage.users,
		pageSize: state.usersPage.pageSize,
		totalUsersCount: state.usersPage.totalUsersCount,
		currentPage: state.usersPage.currentPage,
		isFetching: state.usersPage.isFetching,
	}
}

// let mapDispatchToProps = (dispatch) => {
// 	return {
// 		follow: (userId) => dispatch(followAC(userId)),
// 		unfollow: (userId) => dispatch(unfollowAC(userId)),
// 		setUsers: (users) => dispatch(setUsersAC(users)),
// 		setTotalUsersCount: (totalUsers) => dispatch(setTotalUsersCountAC(totalUsers)),
// 		setCurrentPage: (pageNumber) => dispatch(setCurrentPageAC(pageNumber)),
// 		toggleIsFetching: (isFetching) => dispatch(toggleIsFetchingAC(isFetching)),
// 	}
// }

export default connect(mapStateToProps,
	{ follow, unfollow, setUsers, setTotalUsersCount, setCurrentPage, toggleIsFetching })(UsersContainer);