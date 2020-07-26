import React from "react";
import Header from "./Header";
import { connect } from "react-redux";
import { getAuthUserData } from "../../redux/auth-reducer";
import { compose } from "redux";

// import { toggleIsFetching, setAuthUserData } from "../../redux/auth-reducer";
// import { authAPI } from "../../api/api";
// import { setUserProfile } from '../../redux/profile-reducer';

class HeaderContainer extends React.Component {
  componentDidMount() {
    this.props.getAuthUserData();
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

export default compose(connect(mapsStateToProps, { getAuthUserData }))(
  HeaderContainer
);
