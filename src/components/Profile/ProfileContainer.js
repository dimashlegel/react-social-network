import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { setUserProfile } from '../../redux/profile-reducer';
import { withRouter } from 'react-router-dom';
import usersApi from '../../api/api';


class ProfileContainer extends React.Component {

	componentDidMount() {
		let userId = this.props.match.params.userId;
		if (!userId) {
			userId = 2;
		}
		usersApi.getProfile(userId).then(response => {
			this.props.setUserProfile(response);
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

let WithUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, { setUserProfile })(WithUrlDataContainerComponent);