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
							Lorem kfnf jjjjf nikfjdn jidshfid hjfel khjfidh hj nfi jj jhfu
							jhijij kfh nfgj jhdiej ojm jikdv iihfdn jhdnkfmj gjgj hgygu jhuj
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
