import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { setUserProfile, getProfile } from '../../redux/profile-reducer';
import Profile from './Profile';

class ProfileContainer extends React.Component {

	componentDidMount() {
		let userId = this.props.match.params.userId;
		if (!userId) {
			userId = 2;
		}
		this.props.getProfile(userId);
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

export default connect(mapStateToProps, { setUserProfile, getProfile })(WithUrlDataContainerComponent);