import { FunctionalComponent } from 'preact';
import { useLocation } from 'preact-iso';
import { useAuth } from '../contexts/AuthContext';

const Sidebar: FunctionalComponent = () => {
  const { url } = useLocation();
  const { currentUser } = useAuth();

  // Helper function to check if a path is active
  const isActive = (path: string): boolean => {
    return url === path;
  };

  return (
    <aside class="sidebar">
      <div class="sidebar-content">
        <nav class="sidebar-nav">
          <h3>Main Menu</h3>
          <ul>
            <li>
              <a href="/" class={isActive('/') ? 'active' : ''}>
                Home
              </a>
            </li>
            {currentUser && (
              <>
                <li>
                  <a href="/dashboard" class={isActive('/dashboard') ? 'active' : ''}>
                    Dashboard
                  </a>
                </li>
                <li>
                  <a href="/profile" class={isActive('/profile') ? 'active' : ''}>
                    Profile
                  </a>
                </li>
              </>
            )}
          </ul>

          {currentUser && (
            <>
              <h3>Settings</h3>
              <ul>
                <li>
                  <a href="#" class="disabled">Account Settings</a>
                </li>
                <li>
                  <a href="#" class="disabled">Preferences</a>
                </li>
              </ul>
            </>
          )}

          <h3>Help</h3>
          <ul>
            <li>
              <a href="#" class="disabled">Documentation</a>
            </li>
            <li>
              <a href="#" class="disabled">Support</a>
            </li>
          </ul>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
