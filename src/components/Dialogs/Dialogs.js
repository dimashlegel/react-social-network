import React from 'react';
import { addMessageActionCreator, onMessageChangeActionCreator } from '../../redux/dialogs-reducer';
import Dialog from './Dialog/Dialog';
import classes from './Dialogs.module.scss';
import Message from './Message/Message';


const Dialogs = (props) => {
	// debugger;
	let dialogsElements = props.state.dialogs.map(dialog => <Dialog name={dialog.name} id={'/' + dialog.id} />);
	let messageElements = props.state.messages.map(message => <Message message={message.message} id={message.id} />);

	// let newMessage = React.createRef();

	let addMessage = () => {
		props.dispatch(addMessageActionCreator());
	}

	let onMessageChange = (e) => {
		props.dispatch(onMessageChangeActionCreator(e.target.value));
	}

	return (
		<div className={classes.dialogs}>
			<div className={classes.dialogs__items}>
				{dialogsElements}
			</div>
			<div className={classes.dialogs__messages}>
				{messageElements}
				<div>
					<textarea value={props.state.newMessageText} onChange={onMessageChange} placeholder='Enter new message'></textarea>
				</div>
				<button onClick={addMessage}>Add message</button>
			</div>
		</div>
	)
}

export default Dialogs; 