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
					{/* <Route path='/dialogs' component={() => <Dialogs dialogsData={props.data.dialogsData} messagesData={props.data.messagesData} />} />
					<Route path='/profile' component={() => <Profile postsData={props.data.postsData} />} /> */}

					<Route path='/dialogs' render={() => <Dialogs dialogsData={props.data.dialogsData} messagesData={props.data.messagesData} />} />
					<Route path='/profile' render={() => <Profile postsData={props.data.postsData} />} />

					{/* <Route path='/news' component={News} />
				<Route path='/music' component={Music} />
				<Route path='/settings' component={Settings} /> */}
				</div>
			</div>
		</BrowserRouter>
	);
}

export default App;