import React from 'react';
import Dialog from './Dialog/Dialog';
import classes from './Dialogs.module.scss';
import Message from './Message/Message';

const Dialogs = (props) => {

	let dialogsElements = props.dialogsData.map(dialog => <Dialog name={dialog.name} id={'/' + dialog.id} />);
	let messageElements = props.messagesData.map(message => <Message message={message.message} id={message.id} />);

	return (
		<div className={classes.dialogs}>
			<div className={classes.dialogs__s}>
				{dialogsElements}
			</div>
			<div className={classes.dialogs__messages}>
				{messageElements}
			</div>
		</div>
	)
}

export default Dialogs; 