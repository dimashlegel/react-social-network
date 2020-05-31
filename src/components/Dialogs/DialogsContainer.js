import React from 'react';
import { addMessageActionCreator, onMessageChangeActionCreator } from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';
import StoreContext from '../../StoreContext';

const DialogsContainer = () => {

	return (
		<StoreContext.Consumer>
			{
				(store) => {
					let state = store.getState();

					let addMessage = () => {
						store.dispatch(addMessageActionCreator());
					}

					let onMessageChange = (text) => {
						store.dispatch(onMessageChangeActionCreator(text));
					}
					
					return <Dialogs state={state.dialogsPage} addMessage={addMessage} onMessageChange={onMessageChange} />
				}
			}
		</StoreContext.Consumer>
	)
}

export default DialogsContainer; 