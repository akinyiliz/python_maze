import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import NavBar from './components/navbar/NavBar';
import Home from './components/home/Home';
import Features from './components/features/Features';
import About from './components/about/About';

function App() {
	return (
		<div>
			<Router>
				<NavBar />
				<Routes>
					<Route
						path="/"
						element={<Home />}
					></Route>
					<Route
						path="/features"
						element={<Features />}
					></Route>
					<Route
						path="/about"
						element={<About />}
					></Route>
				</Routes>
			</Router>
		</div>
	);
}

export default App;
