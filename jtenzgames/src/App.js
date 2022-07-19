import React, { useState } from 'react';
import { HomeBody } from './components/HomeBody';
import { Navbar } from './components/Navbar';

const App = () => {
	const [activeTab, setActiveTab] = useState('JTenzGames');
	return (
		<div>
			<Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
			<HomeBody activeTab={activeTab} />
		</div>
	);
};

export default App;
