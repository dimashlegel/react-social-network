import React from 'react';
import ava from './../../../images/user-placeholder.png';
import classes from './ProfileInfo.module.scss';


const ProfileInfo = () => {
	return (
		<div className={classes.profile}>
			<div className={classes.profile__banner}></div>
			<div className={classes.profile__avatar}> 
				<img src={ava} alt="" />
			</div>
			<div className={classes.profile__info}></div>
		</div>
	)
}

export default ProfileInfo;