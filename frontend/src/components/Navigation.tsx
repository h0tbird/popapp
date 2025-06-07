import { FunctionalComponent } from 'preact';
import { useLocation } from 'preact-iso';
import { useAuth } from '../contexts/AuthContext';

const Navigation: FunctionalComponent = () => {
  const { currentUser } = useAuth();
  const { url } = useLocation();

  // Helper function to check if a path is active
  const isActive = (path: string): boolean => {
    return url === path;
  };

  return (
    <nav>
      <div class="nav-container">
        <div class="nav-logo">
          <a href="/">
            <img src="/imgs/popapp.png" alt="popapp.com logo" class="nav-logo-img" />
            <span>popapp.com</span>
          </a>
        </div>
        <div class="nav-links">
          <a href="/" class={isActive('/') ? 'active' : ''}>Home</a>
          {currentUser ? (
            <>
              <a href="/profile" class={isActive('/profile') ? 'active' : ''}>Profile</a>
              <a href="/dashboard" class={isActive('/dashboard') ? 'active' : ''}>Dashboard</a>
            </>
          ) : (
            <a href="/login" class={isActive('/login') ? 'active' : ''}>Login</a>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
