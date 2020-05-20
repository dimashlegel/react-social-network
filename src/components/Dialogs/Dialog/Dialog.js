import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Dialog.module.scss';

const Dialog = (props) => {
	return (
		<div className={styles.dialog_item}>
			<NavLink to={"/dialogs" + props.id} activeClassName={styles.active}>{props.name}</NavLink>
		</div>
	)
}
export default Dialog; 