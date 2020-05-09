import React from 'react';
import classes from './Dialogs.module.scss';
import DialogItem from './Dialog/DialogItem';
import Message from './Message/Message';

const Dialogs = () => {
	let dialogsData = [
		{ name: 'Dima', id: 1 },
		{ name: 'Anna', id: 2 },
		{ name: 'Rulia', id: 3 },
		{ name: 'Alina', id: 4 },
	];
	let messagesData = [
		{ message: 'Hi', id: 1 },
		{ message: 'Hello', id: 2 },
		{ message: 'How are you?', id: 3 },
		{ message: 'OK', id: 4 },
	];
	return (
		<div className={classes.dialogs}>
			<div className={classes.dialogs__items}>
				<DialogItem name={dialogsData[0].name} id={'/' + dialogsData[0].id} />
				<DialogItem name={dialogsData[1].name} id={'/' + dialogsData[1].id} />
				<DialogItem name={dialogsData[2].name} id={'/' + dialogsData[2].id} />
				<DialogItem name={dialogsData[3].name} id={'/' + dialogsData[3].id} />
			</div>
			<div className={classes.dialogs__messages}>
				<Message message={messagesData[0].message} />
				<Message message={messagesData[1].message} />
				<Message message={messagesData[2].message} />
				<Message message={messagesData[3].message} />
			</div>
		</div>
	)
}

export default Dialogs; 