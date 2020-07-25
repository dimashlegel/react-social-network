import React from "react";
import Header from "./Header";
import { connect } from "react-redux";
import { toggleIsFetching, setAuthUserData } from "../../redux/auth-reducer";
import { authAPI } from "../../api/api";
// import { setUserProfile } from '../../redux/profile-reducer';

class HeaderContainer extends React.Component {
  componentDidMount() {
    this.props.toggleIsFetching(true);

    authAPI.me().then((response) => {
      if (response.data.resultCode === 0) {
        let { id, login, email } = response.data.data;
        this.props.setAuthUserData(id, email, login);
      }
      this.props.toggleIsFetching(false);
    });
  }
  render() {
    return <Header {...this.props} />;
  }
}

const mapsStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
    login: state.auth.login,
    id: state.auth.userID,
    // photos: state.profilePage.profile.photos
  };
};
// setUserProfile
export default connect(mapsStateToProps, { toggleIsFetching, setAuthUserData })(
  HeaderContainer
);
