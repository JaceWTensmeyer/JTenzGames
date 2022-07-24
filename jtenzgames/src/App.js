import React, { useState } from 'react';
import { SiteBody } from './components/SiteBody';
import { Navbar } from './components/Navbar';

const App = () => {
	const [activeTab, setActiveTab] = useState('JTenzGames');
	return (
		<div>
			<Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
			<SiteBody activeTab={activeTab} setActiveTab={setActiveTab} />
		</div>
	);
};

export default App;
