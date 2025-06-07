import { useLocation } from 'preact-iso';
import { useAuth } from '../contexts/AuthContext';

export function Header() {
	const { url } = useLocation();
	const { currentUser } = useAuth();

	return (
		<header>
			<nav>
				<a href="/" class={url == '/' && 'active'}>
					Home
				</a>
				{currentUser ? (
					<>
						<a href="/dashboard" class={url == '/dashboard' && 'active'}>
							Dashboard
						</a>
						<a href="/profile" class={url == '/profile' && 'active'}>
							Profile
						</a>
					</>
				) : (
					<a href="/login" class={url == '/login' && 'active'}>
						Login
					</a>
				)}
			</nav>
		</header>
	);
}
