import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


let postsData = [
	{ post: 'Hi, what are you doing?', id: 1, likesCount: 1, },
	{ post: 'I am rest', id: 2, likesCount: 12, },
	{ post: 'How are you?', id: 3, likesCount: 3, },
	{ post: 'OK', id: 4, likesCount: 41, },
];

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

let data = {
	postsData,
	dialogsData,
	messagesData
}

ReactDOM.render(
	<React.StrictMode>
		<App data={data} />
	</React.StrictMode>,
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
