import React from 'react';
import styles from './Header.module.scss';
import { NavLink } from 'react-router-dom';

const Header = (props) => {
	return (
		<header className={styles.header}>
			<img src='https://cdn.pixabay.com/photo/2020/03/30/10/46/stay-home-save-lives-4983843_960_720.png' alt="" />
			<div className={styles.loginBlock}>
				{props.isAuth ? props.login : <NavLink to='login'>Login</NavLink>}
			</div>
		</header>
	)
}

export default Header;