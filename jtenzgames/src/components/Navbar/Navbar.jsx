import * as React from 'react';
import logo from '../../images/RoundLogo.png';

import './style.scss';

const Navbar = () => {
	return (
		<div className={'navbarContainer'}>
			<img className={'logo'} src={logo} alt='logo' />
		</div>
	);
};

export default Navbar;
