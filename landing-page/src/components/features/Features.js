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
							There are two main mechanisms used to generate mazes. In "carving
							passages", one marks out the network of available routes. In
							building a maze by "adding walls", one lays out a set of
							obstructions within an open area. Most mazes drawn on paper are
							done by drawing the walls, with the spaces in between the markings
							composing the passages.
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
							There are two main mechanisms used to generate mazes. In "carving
							passages", one marks out the network of available routes. In
							building a maze by "adding walls", one lays out a set of
							obstructions within an open area. Most mazes drawn on paper are
							done by drawing the walls, with the spaces in between the markings
							composing the passages.
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
							There are two main mechanisms used to generate mazes. In "carving
							passages", one marks out the network of available routes. In
							building a maze by "adding walls", one lays out a set of
							obstructions within an open area. Most mazes drawn on paper are
							done by drawing the walls, with the spaces in between the markings
							composing the passages.
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
							There are two main mechanisms used to generate mazes. In "carving
							passages", one marks out the network of available routes. In
							building a maze by "adding walls", one lays out a set of
							obstructions within an open area. Most mazes drawn on paper are
							done by drawing the walls, with the spaces in between the markings
							composing the passages.
						</span>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Features;
