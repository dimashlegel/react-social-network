import React from 'react';
import DialogItem from './Dialog/DialogItem';
import classes from './Dialogs.module.scss';
import Message from './Message/Message';

const Dialogs = () => {

	let dialogsData = [
		{ name: 'Dima', id: 1 },
		{ name: 'Anna', id: 2 },
		{ name: 'Rulia', id: 3 },
		{ name: 'Alina', id: 4 },
	];

	let dialogsElements = dialogsData.map(dialog => <DialogItem name={dialog.name} id={'/' + dialog.id} />);

	let messagesData = [
		{ message: 'Hi', id: 1 },
		{ message: 'Hello', id: 2 },
		{ message: 'How are you?', id: 3 },
		{ message: 'OK', id: 4 },
	];

	let messageElements = messagesData.map(message => <Message message={message.message} id={message.id} />);

	return (
		<div className={classes.dialogs}>
			<div className={classes.dialogs__items}>
				{dialogsElements}
			</div>
			<div className={classes.dialogs__messages}>
				{messageElements}
			</div>
		</div>
	)
}

export default Dialogs; 