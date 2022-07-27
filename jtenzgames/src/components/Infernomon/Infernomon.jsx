import * as React from 'react';

import SchoolAndProfessions from '../../images/SchoolAndProfessions.png';
import StarterInfernomon from '../../images/StarterInfernomon.png';
import Dungeon from '../../images/Dungeon.png';
import Gear from '../../images/Gear.png';
import TreasureChest from '../../images/TreasureChest.png';

import './style.scss';

const Infernomon = () => {
	return (
		<div className={'sectionContainer'}>
			<div className={'header'}>Infernomon Overview</div>
			<div className={'overviewSection'}>
				<div className={'overviewText'}>
					<i>Infernomon</i> is a 2D Live Action Dungeon Crawling Role Playing
					Game that will be available on PC and purchasable on Steam. The game
					takes place in a purgatory-like enviornment located on Infernal
					Island. Infernal Island is home to a humanoid race called
					Infernalites. The Infernalites are constantly defending Infernal
					Island from monsters called Infernomon that spawn from different areas
					on Infernal Island called "Dungeons".
				</div>
				<div className={'overviewText'}>
					In this game, you will begin your journey as a 10 year old witch or
					wizard of the Infernalite race. You will attend school to learn
					different professions that will help you ward off the attacking
					Infernomon and defend your island. You will learn to conjure
					Infernomon of your own that will battle along side you as you venture
					into different Dungeons. Completing increasingly difficult Dungeons
					will give you more powerful loot. You will be able to buy and sell
					powerful loot and rare Infernomon to and from other real life players
					online through the Auction House.
				</div>
			</div>
			<div className={'header'}>Core Game Elements</div>
			<div className={'featureSection'}>
				<div className={'featureTitle'}>Infernomon</div>
				<div className={'featureSectionColumnOne'}>
					<div>
						<img
							style={{ height: '250px' }}
							src={StarterInfernomon}
							alt='logo'
						/>
					</div>
				</div>
				<div className={'featureSectionColumnTwo'}>
					<div>
						Infernomon are monsters that come in a variety of different species.
						You will learn recipes used to conjure Infernomon of your own to
						battle with you against enemy Infernomon. Infernomon variables
						include:
					</div>
					<div>
						- 1 to 2 types (
						<i style={{ color: 'firebrick', fontWeight: 'bold' }}>Fire, </i>
						<i style={{ color: 'dodgerblue', fontWeight: 'bold' }}>Water, </i>
						<i style={{ color: 'green', fontWeight: 'bold' }}>Blight, </i>
						<i style={{ color: 'gold', fontWeight: 'bold' }}>Electric, </i>
						<i style={{ color: 'cornflowerBlue', fontWeight: 'bold' }}>
							Wind,{' '}
						</i>
						<i style={{ color: 'goldenrod', fontWeight: 'bold' }}>Earth, </i>
						<i style={{ color: 'deeppink', fontWeight: 'bold' }}>Arcane, </i>
						<i style={{ color: 'purple', fontWeight: 'bold' }}>Toxic, </i>
						<i style={{ color: 'gray', fontWeight: 'bold' }}>Normal </i>)
					</div>
					<div>
						- 1 of the 4 avaialable roles:{' '}
						<i style={{ fontWeight: 'bold' }}>
							Assassin, Defender, Support, Utility.
						</i>
					</div>
					<div>
						- Unique <i style={{ fontWeight: 'bold' }}>Attacks</i>
					</div>
					<div>
						- Unique <i style={{ fontWeight: 'bold' }}>Base Stats</i> per
						species and individual{' '}
						<i style={{ fontWeight: 'bold' }}>Bonus Stats</i>
					</div>
					<div>
						- Species rarity: <i style={{ fontWeight: 'bold' }}>Common, </i>
						<i style={{ color: '#00cd66', fontWeight: 'bold' }}>Uncommon, </i>
						<i style={{ color: '#0886ff', fontWeight: 'bold' }}>Rare, </i>
						<i style={{ color: '#c578d5', fontWeight: 'bold' }}>Legendary, </i>
						<i style={{ color: '#d67513', fontWeight: 'bold' }}>Epic </i>
					</div>
					<div>
						- Stat altering <i style={{ fontWeight: 'bold' }}>Temperments</i>
					</div>
					<div>
						- 1 or more conjuring perks:{' '}
						<i style={{ fontWeight: 'bold' }}>Lucky, Talented, and Shiny</i>
					</div>
				</div>
			</div>
			<div className={'featureSection'}>
				<div className={'featureTitle'}>School & Professions</div>
				<div className={'featureSectionColumnOne'}>
					<div>
						<img
							style={{ height: '250px' }}
							src={SchoolAndProfessions}
							alt='logo'
						/>
					</div>
				</div>
				<div className={'featureSectionColumnTwo'}>
					<div>
						- Get sorted into a school house to determine which of the three
						roles your character will play:{' '}
						<i style={{ fontWeight: 'bold' }}>
							Assassin, Defender, and Support.
						</i>
					</div>
					<div>
						- Learn about the 4 different professions taught at the school:{' '}
						<i style={{ fontWeight: 'bold' }}>
							Conjuring, Potion Making, Gem Crafting, Enchanting
						</i>
					</div>
					<div>
						- Rank up your skills in each of the professions to recieve
						additional benefits when battling.
					</div>
					<div>
						- Choose a single profession to become your{' '}
						<i style={{ fontWeight: 'bold' }}>Major</i> and recieve additional
						benefits to 1 profession.
					</div>
				</div>
			</div>
			<div className={'featureSection'}>
				<div className={'featureTitle'}>Dungeons & Battling</div>
				<div className={'featureSectionColumnOne'}>
					<div>
						<img
							style={{
								height: '220px',
								paddingTop: '20px',
							}}
							src={Dungeon}
							alt='logo'
						/>
					</div>
				</div>
				<div className={'featureSectionColumnTwo'}>
					<div>
						- Battle enemy Infernomon in{' '}
						<i style={{ fontWeight: 'bold' }}>8 different Dungeons</i>
					</div>
					<div>
						- Each Dungeon you will traverse though a labyrinth fighting
						numerous Infernomon Creeps and finish the Dungeon fighting an
						Infernomon Boss
					</div>
					<div>
						- Pick 2 of your Infernomon to fight with you when you enter a
						Dungeon.
					</div>
					<div>- Each Dungeon has unique battle mechanics.</div>
					<div>- Complete a Dungeon to recieve valuable loot.</div>
					<div>
						- If a Dungeon is completed fast enough, you will increase your
						Dungeon Score and unlock a harder difficulty of the same Dungeon.
					</div>
					<div>
						- The harder the difficulty of the Dungeon, the better the rewards.
					</div>
					<div>
						- Increase your Dungeon score and see how you rank against other
						online players.
					</div>
				</div>
			</div>
			<div className={'featureSection'}>
				<div className={'featureTitle'}>Equipable Gear</div>
				<div className={'featureSectionColumnOne'}>
					<div>
						<img style={{ height: '250px' }} src={Gear} alt='logo' />
					</div>
				</div>
				<div className={'featureSectionColumnTwo'}>
					<div>
						- <i style={{ fontWeight: 'bold' }}>Player Gear</i>: Staff, Wand,
						Hat, Robe
					</div>
					<div>
						- Enchant Staffs and Wands with your{' '}
						<i style={{ fontWeight: 'bold' }}>Enchanting</i> skills to provide a
						damage type and increased power.
					</div>
					<div>
						<i style={{ fontWeight: 'bold' }}></i>
					</div>
					<div>
						- <i style={{ fontWeight: 'bold' }}>Pendants</i>: Equip 1 Pendant
						per Infernomon
					</div>
					<div>
						- 8 different Pendant Types that grant unique abilites to
						Infernomon.
					</div>
					<div>
						- Attach gems made from your{' '}
						<i style={{ fontWeight: 'bold' }}>Gem Crafting</i> skills to provide
						stat bonuses to a pendant.
					</div>
					<div>
						- Player Gear and Pendants come in 1 of 5 rarities:{' '}
						<i style={{ fontWeight: 'bold' }}>Common, </i>
						<i style={{ color: '#00cd66', fontWeight: 'bold' }}>Uncommon, </i>
						<i style={{ color: '#0886ff', fontWeight: 'bold' }}>Rare, </i>
						<i style={{ color: '#c578d5', fontWeight: 'bold' }}>Legendary, </i>
						<i style={{ color: '#d67513', fontWeight: 'bold' }}>Epic </i>
					</div>
					<div>
						- Player Gear and Pendants provide additional stat benefits based on
						the level of Dungeon it was acquired from and its rarity.
					</div>
				</div>
			</div>
			<div className={'featureSection'}>
				<div className={'featureTitle'}>Daily & Weekly Treasure Chests</div>
				<div className={'featureSectionColumnOne'}>
					<div>
						<img style={{ height: '230px' }} src={TreasureChest} alt='logo' />
					</div>
				</div>
				<div className={'featureSectionColumnTwo'}>
					<div>
						- Open up a{' '}
						<i style={{ fontWeight: 'bold' }}>Daily Treasure Chest</i> to
						recieve rewards equivalent in value to your highest completed
						Dungeon Level.
					</div>
					<div>
						- Open up a{' '}
						<i style={{ fontWeight: 'bold' }}>Weekly Treasure Chest</i> to
						recieve rewards equivalent in value to your average Dungeon Score +5
						across all completed Dungeons from the previous week (i.e. If your
						average Dungeon Score was 10, you would recieve rewards equivilant
						to completing a level 15 Dungeon).
					</div>
				</div>
			</div>
			<div className={'featureSection'}>
				<div className={'featureTitle'}>Auction House</div>
			</div>
			<div>Achievements</div>
			<div>Future Plans</div>
		</div>
	);
};

export default Infernomon;
