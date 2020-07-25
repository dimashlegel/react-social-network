import React from "react";
import { connect } from "react-redux";
import {
  follow,
  getUsers,
  setCurrentPage,
  toggleFollowingProgress,
  unfollow,
} from "../../redux/users-reducer";
import Preloader from "../common/Preloader/Preloader";
import Users from "./Users";

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize);
  }

  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
    this.props.getUsers(pageNumber, this.props.pageSize);

    // this.props.toggleIsFetching(true);
    // usersApi.getUsers(pageNumber, this.props.pageSize).then((response) => {
    //   this.props.toggleIsFetching(false);
    //   this.props.setUsers(response.items);
    // });

    // this.props.toggleIsFetching(true);
    // usersApi.getUsers(this.props.currentPage, this.props.pageSize)
    //   .then((response) => {
    //     this.props.toggleIsFetching(false);
    //     this.props.setUsers(response.items);
    //     this.props.setTotalUsersCount(response.totalCount);
    //   });
  };

  render() {
    return (
      <>
        {this.props.isFetching ? <Preloader /> : null}
        <Users
          totalUsersCount={this.props.totalUsersCount}
          pageSize={this.props.pageSize}
          currentPage={this.props.currentPage}
          users={this.props.users}
          follow={this.props.follow}
          unfollow={this.props.unfollow}
          onPageChanged={this.onPageChanged}
          followingInProgress={this.props.followingInProgress}
        />
      </>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
    followingInProgress: state.usersPage.followingInProgress,
  };
};

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

export default connect(mapStateToProps, {
  follow,
  unfollow,
  setCurrentPage,
  toggleFollowingProgress,
  getUsers,
})(UsersContainer);
