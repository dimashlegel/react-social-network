import React from 'react';
import * as axios from 'axios';
import Profile from './Profile';
import { connect } from 'react-redux';
import { setUserProfile } from '../../redux/profile-reducer';

class ProfileContainer extends React.Component {

	componentDidMount() {
		// this.props.toggleIsFetching(true);
		axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`).then(response => {
			this.props.setUserProfile(response.data);
			// this.props.toggleIsFetching(false);
			// debugger;
		});
	}

	render() {
		return (
			<div>
				<Profile {...this.props} profile={this.props.profile} />
			</div>
		)
	}

}

let mapStateToProps = (state) => {
	return {
		profile: state.profilePage.profile,
	}
}

// let mapDispatchToProps = (dispatch) => {
// 	return {
// 		setUserProfile: (data) => dispatch(setUserProfile(data))
// 	}
// }

export default connect(mapStateToProps, {setUserProfile})(ProfileContainer);