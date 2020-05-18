import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import state, { addNewMessage, addPost, updateNewMessageText, updateNewPostText, subscribe } from './redux/state';
import * as serviceWorker from './serviceWorker';

let rerenderEntireTree = (state) => {
	ReactDOM.render(
		<React.StrictMode>
			<App state={state} addPost={addPost} updateNewPostText={updateNewPostText} updateNewMessageText={updateNewMessageText} addNewMessage={addNewMessage} />
		</React.StrictMode>,
		document.getElementById('root')
	);
}
rerenderEntireTree(state);

subscribe(rerenderEntireTree);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
