import './About.css';
import '../home/Home.css';

import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

function About() {
	return (
		<div
			className="about"
			id="about"
		>
			<div className="about-text">
				<span>About</span>
				<span>
					A maze is a path or collection of paths, typically from an entrance to
					a goal. The word is used to refer both to branching tour puzzles
					through which the solver must find a route, and to simpler
					non-branching ("unicursal") patterns that lead unambiguously through a
					convoluted layout to a goal. The term "labyrinth" is generally
					synonymous with "maze", but can also connote specifically a unicursal
					pattern.[1] The pathways and walls in a maze are typically fixed, but
					puzzles in which the walls and paths can change during the game are
					also categorised as mazes or tour puzzles.
				</span>
			</div>
			<div className="members">
				<div className="members-content">
					<div className="member">
						<span>Ricky Kimumu</span>
						<span>Full stack developer</span>
						<div className="social-icons">
							<ul className="social-links">
								<li>
									<a
										href="df"
										target="_blank"
									>
										<FaLinkedin size={25} />
									</a>
								</li>
								<li>
									<a
										href="df"
										target="_blank"
									>
										<FaGithub size={25} />
									</a>
								</li>
								<li>
									<a
										href="df"
										target="_blank"
									>
										<FaTwitter size={25} />
									</a>
								</li>
							</ul>
						</div>
					</div>
					<div className="member">
						<span>Elizabeth Odhiambo</span>
						<span>Software developer</span>
						<div className="social-icons">
							<ul className="social-links">
								<li>
									<a
										href="https://www.linkedin.com/in/elizabethodhiambo/"
										target="_blank"
										rel="noreferrer"
									>
										<FaLinkedin size={25} />
									</a>
								</li>
								<li>
									<a
										href="https://github.com/akinyiliz"
										target="_blank"
										rel="noreferrer"
									>
										<FaGithub size={25} />
									</a>
								</li>
								<li>
									<a
										href="https://twitter.com/iamliz_zie"
										target="_blank"
										rel="noreferrer"
									>
										<FaTwitter size={25} />
									</a>
								</li>
							</ul>
						</div>
					</div>
					<div className="member">
						<span>Giggs Amadalo</span>
						<span>Full stack developer</span>
						<div className="social-icons">
							<ul className="social-links">
								<li>
									<a
										href="df"
										target="_blank"
									>
										<FaLinkedin size={25} />
									</a>
								</li>
								<li>
									<a
										href="df"
										target="_blank"
									>
										<FaGithub size={25} />
									</a>
								</li>
								<li>
									<a
										href="df"
										target="_blank"
									>
										<FaTwitter size={25} />
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
				<button className="btn about-btn">
					<a
						href="https://github.com/akinyiliz/python_maze"
						target="_blank"
						rel="noreferrer"
					>
						Download
					</a>
				</button>
			</div>
		</div>
	);
}

export default About;
