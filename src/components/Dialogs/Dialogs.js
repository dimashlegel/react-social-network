import React from 'react';
import Dialog from './Dialog/Dialog';
import classes from './Dialogs.module.scss';
import Message from './Message/Message';

const Dialogs = (props) => {
	// debugger;
	let dialogsElements = props.state.dialogs.map(dialog => <Dialog name={dialog.name} id={'/' + dialog.id} />);
	let messageElements = props.state.messages.map(message => <Message message={message.message} id={message.id} />);

	let newMessage = React.createRef();

	let addMessage = () => {
		// props.addNewMessage();
		props.dispatch({ type: 'ADD-NEW-MESSAGE' });
	}

	let onMessageChange = () => {
		// props.updateNewMessageText(newMessage.current.value)
		props.dispatch({ type: 'UPDATE-NEW-MESSAGE-TEXT', newMessage: newMessage.current.value });
	}

	return (
		<div className={classes.dialogs}>
			<div className={classes.dialogs__items}>
				{dialogsElements}
			</div>
			<div className={classes.dialogs__messages}>
				{messageElements}

				<div><textarea ref={newMessage} value={props.state.newMessageText} onChange={onMessageChange}></textarea></div>
				<button onClick={addMessage}>Add message</button>

			</div>
		</div>
	)
}

export default Dialogs; 