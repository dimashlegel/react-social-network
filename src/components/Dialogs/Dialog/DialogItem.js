import React from 'react';
import { NavLink } from 'react-router-dom'
import classes from './DialogItem.module.scss';

const DialogItem = (props) => {
	return (
		<div className={classes.dialog_item}>
			<NavLink to={"/dialogs" + props.id} activeClassName={classes.active}>{props.name}</NavLink>
		</div>
	)
}
export default DialogItem; 