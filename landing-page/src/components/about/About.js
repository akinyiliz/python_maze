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
					a goal.The project was inspired by one of our team members love for
					gaming that led to the creation of python_maze. The project has taken
					us a month and more to get to where it is now. The game is open to
					modification and changes to get a better experience which can be done
					by opening a pull request on the github repository. This is our
					Portfolio Project for the completion of Holberton School(ALX Software
					Engineering Programme) and marks the beginning of Software Engineering
					journey.
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
										href="https://www.linkedin.com/in/ricky-kimumu-350147199"
										target="_blank"
										rel="noreferrer"
									>
										<FaLinkedin size={25} />
									</a>
								</li>
								<li>
									<a
										href="https://github.com/Rickyflame"
										target="_blank"
										rel="noreferrer"
									>
										<FaGithub size={25} />
									</a>
								</li>
								<li>
									<a
										href="https://twitter.com/R_Kimumu"
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
										href="https://www.linkedin.com/in/giggs-bradly-8035a4247/"
										target="_blank"
										rel="noreferrer"
									>
										<FaLinkedin size={25} />
									</a>
								</li>
								<li>
									<a
										href="https://github.com/AmadaloYoung"
										target="_blank"
										rel="noreferrer"
									>
										<FaGithub size={25} />
									</a>
								</li>
								<li>
									<a
										href="https://twitter.com/Amadaloyoung"
										target="_blank"
										rel="noreferrer"
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
