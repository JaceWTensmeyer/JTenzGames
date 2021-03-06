import * as React from 'react';
import logo from '../../images/RoundLogo.png';

import './style.scss';

const Navbar = ({ activeTab, setActiveTab }) => {
	return (
		<div className={'navbarContainer'}>
			<img className={'logo'} src={logo} alt='logo' />
			<div className={'tabContainer'}>
				<div
					className={activeTab === 'JTenzGames' ? 'activeTab' : 'tab'}
					onClick={() => setActiveTab('JTenzGames')}
				>
					J Tenz Games
				</div>
				<div
					className={activeTab === 'Infernomon' ? 'activeTab' : 'tab'}
					onClick={() => setActiveTab('Infernomon')}
				>
					Infernomon
				</div>
			</div>
		</div>
	);
};

export default Navbar;
