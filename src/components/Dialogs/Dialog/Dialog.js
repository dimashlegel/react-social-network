import React from 'react';
import { NavLink } from 'react-router-dom'
import classes from './Dialog.module.scss';

const Dialog = (props) => {
	return (
		<div className={classes.dialog_item}>
			<NavLink to={"/dialogs" + props.id} activeClassName={classes.active}>{props.name}</NavLink>
		</div>
	)
}
export default Dialog; 