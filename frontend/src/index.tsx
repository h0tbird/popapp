import { LocationProvider, Router, Route, hydrate, prerender as ssr } from 'preact-iso';

import { Header } from './components/Header.jsx';
import Navigation from './components/Navigation';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import { NotFound } from './pages/_404.jsx';
import LoginPage from './pages/LoginPage';
import ProfilePage from './pages/ProfilePage';
import Dashboard from './pages/Dashboard';
import ProtectedRoute from './components/ProtectedRoute';
import './style.css';
import { AuthProvider } from './contexts/AuthContext';

export function App() {
	return (
		<AuthProvider>
			<LocationProvider>
				<div class="app-container">
					<Navigation />
					<div class="content-wrapper">
						<Sidebar />
						<div class="main-content">
							<Header />
							<main>
								<Router>
									<Route path="/" component={Home} />
									<Route path="/login" component={LoginPage} />
									<ProtectedRoute path="/profile" component={ProfilePage} />
									<ProtectedRoute path="/dashboard" component={Dashboard} />
									<Route default component={NotFound} />
								</Router>
							</main>
						</div>
					</div>
				</div>
			</LocationProvider>
		</AuthProvider>
	);
}

if (typeof window !== 'undefined') {
	hydrate(<App />, document.getElementById('app'));
}

export async function prerender(data) {
	return await ssr(<App {...data} />);
}
