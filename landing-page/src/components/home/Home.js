import './Home.css';

import Maze from '../../assets/maze_login.png';

function Home() {
	return (
		<div
			className="home"
			id="home"
		>
			<div className="home-sides">
				<div className="home-left">
					<div className="home-left-text">
						<span>Python_Maze Game</span>
						<span>
							This is a 3D-maze game written in Python using a Digital
							Differential Analyzer algorithm for raycasting.
						</span>
					</div>
					<button className="btn">
						<a
							href="https://github.com/akinyiliz/python_maze"
							target="_blank"
							rel="noreferrer"
						>
							Download
						</a>
					</button>
				</div>
				<div className="home-right">
					<img
						src={Maze}
						alt="maze"
					/>
				</div>
			</div>
		</div>
	);
}

export default Home;
