import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import store from './redux/redux-store';
import * as serviceWorker from './serviceWorker';
import StoreContext from './StoreContext';

let rerenderEntireTree = (state) => {
	ReactDOM.render(
		<React.StrictMode>
			<StoreContext.Provider value={store}>
				{/* state={state} dispatch={store.dispatch.bind(store)} store={store} */}
				<App />
			</StoreContext.Provider>
		</React.StrictMode>,
		document.getElementById('root')
	);
}

rerenderEntireTree();

store.subscribe(() => {
	rerenderEntireTree();
});

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
