import { Routes, Route } from 'react-router-dom'
import NotFound from './pages/error'
import AboutPage from './pages/aboutpage'
import HomePage from './pages/homepage'
import ProjectsPage from './pages/projects'
import ContactPage from './pages/contact'
import './App.css'

function App() {
	return (
		<Routes>
			<Route exact path="/about/:name" element={<AboutPage />} />
			<Route exact path="/work" element={<ProjectsPage />} />
			<Route exact path="/contact/:name" element={<ContactPage />} />
			<Route exact path="*" element={<NotFound />} />
			<Route exact path="/" element={<HomePage />} />
		</Routes>
	)
}

export default App
