import { Link } from 'react-scroll';

import './NavBar.css';

function NavBar() {
	return (
		<header className="header">
			<div className="logo">
				<Link
					to="home"
					spy={true}
					smooth={true}
					offset={-100}
					duration={500}
				>
					Python_Maze
				</Link>
			</div>
			<nav>
				<ul>
					<li>
						<Link
							to="home"
							spy={true}
							smooth={true}
							offset={-100}
							duration={500}
						>
							Home
						</Link>
					</li>
					<li>
						<Link
							to="features"
							spy={true}
							smooth={true}
							offset={-100}
							duration={500}
						>
							Features
						</Link>
					</li>
					<li>
						<Link
							to="about"
							spy={true}
							smooth={true}
							offset={-100}
							duration={500}
						>
							About
						</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
}

export default NavBar;
