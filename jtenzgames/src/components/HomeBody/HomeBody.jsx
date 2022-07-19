import * as React from 'react';
import background from '../../images/background.jpg';

import './style.scss';

const HomeBody = () => {
	return (
		<div
			className={'homeBodyContainer'}
			style={{ backgroundImage: `url(${background}` }}
		>
			<div>I'm the body</div>
		</div>
	);
};

export default HomeBody;
