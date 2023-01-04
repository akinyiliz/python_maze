import { Link } from 'react-router-dom';

import './NavBar.css';

function NavBar() {
	return (
		<header className="header">
			<div className="logo">Python Maze</div>
			<nav>
				<ul>
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="/features">Features</Link>
					</li>
					<li>
						<Link to="/about">About</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
}

export default NavBar;
