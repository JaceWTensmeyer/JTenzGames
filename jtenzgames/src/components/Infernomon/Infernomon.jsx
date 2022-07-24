import * as React from 'react';

import SchoolAndProfessions from '../../images/SchoolAndProfessions.png';
import StarterInfernomon from '../../images/StarterInfernomon.png';
import Dungeon from '../../images/Dungeon.png';

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
					on Infernal Island called Dungeons.
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
						Infernomon are monsters that come in a number of different species.
						You will conjure Infernomon of your own to battle with you against
						enemy Infernomon.
					</div>
					<div>
						Each species of Infernomon has 1 or 2 types that gives them
						different advantages and disadvantages against other types.
					</div>
					<div>
						Infernomon belong to 1 of the 4 avaialable roles: Assassin,
						Defender, Healer, and Utility.
					</div>
					<div>
						Infernomon have 4 attacks: 1 auto-attack, 2 inherited attacks, and 1
						acquired attack.
					</div>
					<div>
						Each Infernomon has a unique recipe required for conjuring. Some
						recipes have ingredients that are harder to find than others based
						on the Infernomon's rarity.
					</div>
					<div>
						Each time you conjure an Infernomon, you may get lucky and have
						strong stats, ideal attacks, a shiny asthetic, or a combination of
						the three.
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
						When you attend school for your first time, you will take a quiz and
						be sorted into a school house. Your school house will define the
						role your character plays during battle. The three roles that are
						available to your character are: Assassin, Defender, and Healer.
					</div>
					<div>
						Throughout the game, you will frequently visit different classrooms
						within the school to learn the following school subjects: Conjuring,
						Potion Making, Gem Crafting, and Enchanting. Each school subject
						offers your character a unique asset when battling against
						Infernomon. Once you've ranked up your skills in each school
						subject, you will then pick one single school subject which becomes
						your Major. Although it is necessary to learn all school subjects,
						your Major will provide additional benefits specific to a single
						school subject.
					</div>
				</div>
			</div>
			<div className={'featureSection'}>
				<div className={'featureTitle'}>Dungeons & Battling</div>
				<div className={'featureSectionColumnOne'}>
					<div>
						<img
							style={{
								height: '200px',
								paddingTop: '20px',
							}}
							src={Dungeon}
							alt='logo'
						/>
					</div>
				</div>
				<div className={'featureSectionColumnTwo'}>
					<div>
						There are 8 different Dungeons in the game, each of which has enemy
						Infernomon you must defeat as well as different battle mechanics
						unique to each Dungeon.
					</div>
					<div>
						Defeating a Dungeon will reward you with loot and materials used to
						power up your character, conjure Infernomon, and advance through
						your school subjects.
					</div>
					<div>
						If a Dungeon is completed fast enough, you will increase your
						Dungeon Score and unlock a harder difficulty of the same Dungeon.
					</div>
					<div>
						Defeating high level Dungeons provides you with better rewards.
					</div>
					<div>
						Increase your Dungeon score and see how you rank against other
						online players.
					</div>
				</div>
			</div>
			<div>Gear</div>
			<div>Daily/Weekly Reward Chests</div>
			<div>Achievements</div>
			<div>Auction House</div>
			<div>Future Plans</div>
		</div>
	);
};

export default Infernomon;
