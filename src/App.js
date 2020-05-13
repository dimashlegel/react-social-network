import React from 'react';
import './App.scss';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import { Route, BrowserRouter } from 'react-router-dom';

const App = (props) => {


	return (
		<BrowserRouter>
			<div className="app-wrapper">
				<Header />
				<Navbar />
				<div className="app-wrapper-content">

					<Route path='/dialogs' render={() => <Dialogs state={props.state.dialogsPage} />} />
					<Route path='/profile' render={() => <Profile state={props.state.profilePage} />} />

					{/* <Route path='/news' component={News} />
				<Route path='/music' component={Music} />
				<Route path='/settings' component={Settings} /> */}
				</div>
			</div>
		</BrowserRouter>
	);
}

export default App;