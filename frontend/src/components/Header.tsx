import { useLocation } from 'preact-iso';

export function Header() {
	const { url } = useLocation();
	
	// Get the current page name from the URL
	const getPageTitle = () => {
		if (url === '/') return 'Home';
		// Remove the leading slash and capitalize first letter
		return url.substring(1).charAt(0).toUpperCase() + url.substring(2);
	};

	return (
		<header>
			<div class="page-header">
				<h1>{getPageTitle()}</h1>
			</div>
		</header>
	);
}
