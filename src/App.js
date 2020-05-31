import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.scss';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import DialogsContainer from './components/Dialogs/DialogsContainer';

const App = (props) => {
	return (
		<BrowserRouter>
			<div className="app-wrapper">
				<Header />
				<Navbar />
				<div className="app-wrapper-content">
				{/* store={props.store} */}
					<Route path='/dialogs' render={() => <DialogsContainer  />} />
				{/* store={props.store} */}
					<Route path='/profile' render={() => <Profile  />} />
					{/* <Route path='/news' component={News} />
					<Route path='/music' component={Music} />
					<Route path='/settings' component={Settings} /> */}
				</div>
			</div>
		</BrowserRouter>
	);
}

export default App;