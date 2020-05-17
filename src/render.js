import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { addPost, updateNewPostText, updateNewMessageText, addNewMessage } from './redux/state';

export let rerenderEntireTree = (state) => {
	ReactDOM.render(
		<React.StrictMode>
			<App state={state} addPost={addPost} updateNewPostText={updateNewPostText} updateNewMessageText={updateNewMessageText} addNewMessage={addNewMessage}/>
		</React.StrictMode>,
		document.getElementById('root')
	);
}