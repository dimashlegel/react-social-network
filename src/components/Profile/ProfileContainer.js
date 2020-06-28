import React from 'react';
import * as axios from 'axios';
import Profile from './Profile';
import { connect } from 'react-redux';
import { setUserProfile } from '../../redux/profile-reducer';
import { withRouter } from 'react-router-dom';

class ProfileContainer extends React.Component {

	componentDidMount() {
		// this.props.toggleIsFetching(true);
		let userId = this.props.match.params.userId;
		if (!userId) {
			userId = 2;
		}
		axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`).then(response => {
			this.props.setUserProfile(response.data);
			// this.props.toggleIsFetching(false);
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

export default connect(mapStateToProps, {setUserProfile})(WithUrlDataContainerComponent);