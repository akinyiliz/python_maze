import './Features.css';

import monster from '../../assets/monster.png';
import gun from '../../assets/gun.png';
import key from '../../assets/key.png';
import flag from '../../assets/flag.png';
import keySensor from '../../assets/keySensor.png';
import monsterSpawn from '../../assets/monster_spawn.png';

function Features() {
	return (
		<div
			className="features"
			id="features"
		>
			<h1>Features</h1>
			<div className="features-content">
				<div className="feature-1">
					<div className="feature-image">
						<img
							src={monster}
							alt="monster"
						/>
					</div>
					<div className="feature-text">
						<span>Monster</span>
						<span>
							This is an character in the game that appears after some time and
							tries to find you in the maze. We gave it a voice to sound
							realistic and phrases it says as they try to find you.
						</span>
					</div>
				</div>
				<div className="feature-2">
					<div className="feature-image">
						<img
							src={gun}
							alt="gun"
						/>
					</div>
					<div className="feature-text">
						<span>Gun</span>
						<span>
							The gun is a tool that can be used to deter or slow down the
							monster as it chases you. The gun is placed in random places in
							some levels with others having more than one gun. Each gun has one
							bullet meaning that you only get one shot to shoot the monster.
							Once you are able to shoot the monster it resets to its spawn
							location and begins to search for you again.
						</span>
					</div>
				</div>
				<div className="feature-3">
					<div className="feature-image">
						<img
							src={key}
							alt="key"
						/>
					</div>
					<div className="feature-text">
						<span>Key</span>
						<span>
							These are golden keys scattered across each level. The player is
							supposed to collect all of the keys in the shorted period of time
							with the least amount of movement to be able to complete the
							level. Each level has a specified number of keys.
						</span>
					</div>
				</div>
			</div>
			<div className="features-content">
				<div className="feature-4">
					<div className="feature-image">
						<img
							src={flag}
							alt="flag"
						/>
					</div>
					<div className="feature-text">
						<span>Flag</span>
						<span>
							The flag is an item that can be placed at random locations of your
							choosing. Its primary purpose is to give you a sense of direction
							or as a beacon to indicated that you where there. It should be
							noted that if the monster comes into contact with any of your
							flags , it destroys it.
						</span>
					</div>
				</div>
				<div className="feature-5">
					<div className="feature-image">
						<img
							src={keySensor}
							alt="key sensor"
						/>
					</div>
					<div className="feature-text">
						<span>Key Sensor</span>
						<span>
							This is a device that can be picked up at certain locations in
							some levels of the game. It shows the location of all keys of the
							current level for a brief moment in the map that a player need to
							collect or has not collected yet.
						</span>
					</div>
				</div>
				<div className="feature-6">
					<div className="feature-image">
						<img
							src={monsterSpawn}
							alt="monster spawn"
						/>
					</div>
					<div className="feature-text">
						<span>Monster Spawn</span>
						<span>
							This is a fixed location in each map that the monster appears from
							and chases you.
						</span>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Features;
