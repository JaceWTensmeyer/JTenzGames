import * as React from 'react';

import jace from '../../images/JaceMexico.jpeg';
import logo from '../../images/RoundLogo.png';
import StarterInfernomon from '../../images/StarterInfernomon.png';
import TreasureChest from '../../images/TreasureChest.png';
import {
	AiFillTwitterCircle as Twitter,
	AiOutlineYoutube as Youtube,
} from 'react-icons/ai';

import './style.scss';

const JTenzGames = ({ setActiveTab }) => {
	const jTenzGamesHeight = '300px';
	const infernomonHeight = '400px';
	return (
		<div className={'sectionContainer'}>
			{/* J Tenz Games Section */}
			<div className={'section'} style={{ height: jTenzGamesHeight }}>
				<div className={'subSection'}>
					<img style={{ height: jTenzGamesHeight }} src={logo} alt='logo' />
				</div>
				<div
					className={'subSection'}
					style={{
						textAlign: 'left',
						verticalAlign: 'top',
					}}
				>
					<div className={'sectionHeader'}>About</div>
					<div>
						<i style={{ color: '#00D2C5' }}>J Tenz Games</i> is an indie dev
						company created and independently ran by Jace Tensmeyer. Jace
						currently works a day job as a professional Software Engineer and
						spends much of his free time developing games.
					</div>
					<div className={'sectionHeader'}>
						<div
							style={{
								height: '50px',
								width: '50px',
								display: 'inline-block',
								padding: '10px',
							}}
						>
							<a
								href='https://twitter.com/JTenzGames'
								style={{ color: 'white' }}
							>
								<Twitter size='1x' />
							</a>
						</div>
						<div
							style={{
								height: '50px',
								width: '50px',
								display: 'inline-block',
								padding: '10px',
							}}
						>
							<a
								href='https://www.youtube.com/channel/UCufIX50ivfhYtfqmNXxDoeA'
								style={{ color: 'white' }}
							>
								<Youtube size='1x' />
							</a>
						</div>
					</div>
					(TODO: set custom youtube url)
				</div>
				<div className={'subSection'}>
					<img style={{ height: jTenzGamesHeight }} src={jace} alt='logo' />
				</div>
			</div>
			{/* Infernomon Section */}
			<div className={'section'}>
				<div className={'subSection'}>
					<img
						style={{ height: infernomonHeight }}
						src={StarterInfernomon}
						alt='logo'
					/>
				</div>
				<div
					className={'subSection'}
					style={{
						textAlign: 'left',
						verticalAlign: 'top',
					}}
				>
					<div className={'sectionHeader'}>In Development</div>
					<i>J Tenz Games</i> is currently working on a game called
					<i
						style={{ color: '#53fc75', cursor: 'pointer' }}
						onClick={() => setActiveTab('Infernomon')}
					>
						{' '}
						Infernomon
					</i>
					. <i>Infernomon</i> is a Live Action Dungeon Crawling Role Playing
					Game that will be available on PC and purchasable on Steam. In this
					game you will:
					<div className={'sectionPointContainer'}>
						<div className={'sectionPoint'}>
							- Begin your journy as a young witch/wizard
						</div>
						<div className={'sectionPoint'}>
							- Attend school to learn new professions
						</div>
						<div className={'sectionPoint'}>
							- Conjure Infernomon pets (with some luck, maybe they'll be
							shiny!)
						</div>
						<div className={'sectionPoint'}>
							- Battle in increasingly difficult dungeons with your Infernomon
						</div>
						<div className={'sectionPoint'}>- Acquire rare loot</div>
						<div className={'sectionPoint'}>- Complete Achievments</div>
						<div className={'sectionPoint'}>
							- Buy/Sell powerful loot and Infernomon from/to other online
							players
						</div>
						<div className={'sectionPoint'}>
							- Increase your Dungeon Score and climb the online leaderboards
						</div>
					</div>
					<div style={{ paddingTop: '20px' }}>
						<div
							className={'steamButton'}
							onClick={() => alert('Coming Soon!')}
						>
							Add to Steam Wishlist
						</div>
					</div>
				</div>
				<div className={'subSection'}>
					<img
						style={{ height: infernomonHeight }}
						src={TreasureChest}
						alt='logo'
					/>
				</div>
			</div>
			<div className={'section'} style={{ fontSize: '9px' }}>
				(Treasure image from:
				<a href='https://www.freepik.com/vectors/sapphire'>
					Sapphire vector created by macrovector - www.freepik.com
				</a>
				)
			</div>
		</div>
	);
};

export default JTenzGames;
