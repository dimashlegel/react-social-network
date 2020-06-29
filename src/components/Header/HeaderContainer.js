import React from "react";
import Header from "./Header";
import * as axios from 'axios';
import { connect } from "react-redux";
import { toggleIsFetching, setAuthUserData } from "../../redux/auth-reducer";
// import { setUserProfile } from '../../redux/profile-reducer';


class HeaderContainer extends React.Component {
	componentDidMount() {
		
		this.props.toggleIsFetching(true);
		// { withCredentials: true } -- check for authorization
		axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, { withCredentials: true }).then(response => {
			if (response.data.resultCode === 0) {
				let { id, login, email } = response.data.data;
				this.props.setAuthUserData(id, email, login);
			}
			this.props.toggleIsFetching(false);

			// axios.get(`https://social-network.samuraijs.com/api/1.0//profile/2`, { withCredentials: true }).then(response => {
			// 	this.props.setUserProfile(response.data);
			
			// })


		});
	}
	render() {
		return (
			<Header {...this.props} />
		)
	}
}

const mapsStateToProps = (state) => {
	return ({
		isAuth: state.auth.isAuth,
		login: state.auth.login,
		id: state.auth.userID,
		// photos: state.profilePage.profile.photos
	});
}
// setUserProfile
export default connect(mapsStateToProps, { toggleIsFetching, setAuthUserData })(HeaderContainer)