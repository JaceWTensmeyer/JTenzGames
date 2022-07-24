import * as React from 'react';

import background from '../../images/background2.jpg';
import { JTenzGames } from '../JTenzGames';
import { Infernomon } from '../Infernomon';

import './style.scss';

const SiteBody = ({ activeTab, setActiveTab }) => {
	return (
		<div
			className={'siteBodyContainer'}
			style={{ backgroundImage: `url(${background}` }}
		>
			{activeTab === 'JTenzGames' ? (
				<JTenzGames setActiveTab={setActiveTab} />
			) : (
				<Infernomon />
			)}
		</div>
	);
};

export default SiteBody;
