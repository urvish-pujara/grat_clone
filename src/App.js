import React from 'react';
import Home from './Home/Home';
import UserManagement from './Home/UserManagement';
import TabBar from './TopBar/TabBar';

function App() {
	return (
		<>
			<TabBar />
			<UserManagement />
		</>
	)
}

export default App;