import { FunctionalComponent } from 'preact';
import { Link } from 'preact-router/match';
import { useAuth } from '../contexts/AuthContext';

const Navigation: FunctionalComponent = () => {
  const { currentUser } = useAuth();

  return (
    <nav>
      <div class="nav-container">
        <div class="nav-logo">
          <Link href="/">PopApp</Link>
        </div>
        <div class="nav-links">
          <Link activeClassName="active" href="/">Home</Link>
          {currentUser ? (
            <>
              <Link activeClassName="active" href="/profile">Profile</Link>
              <Link activeClassName="active" href="/dashboard">Dashboard</Link>
            </>
          ) : (
            <Link activeClassName="active" href="/login">Login</Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
