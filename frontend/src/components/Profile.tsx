import { FunctionComponent } from 'preact';
import { useAuth } from '../contexts/AuthContext';
import { useState } from 'preact/hooks';
import { signOut } from '../services/authService';

const Profile: FunctionComponent = () => {
  const { currentUser } = useAuth();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSignOut = async () => {
    try {
      setError('');
      setLoading(true);
      const result = await signOut();
      if (!result.success) {
        setError(result.error || 'Failed to sign out');
      }
    } catch (error) {
      setError('Failed to sign out');
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  if (!currentUser) {
    return <p>Please log in to view your profile.</p>;
  }

  return (
    <div class="profile-container">
      <h2>User Profile</h2>
      {error && <div class="error">{error}</div>}
      <div class="profile-info">
        <div class="profile-avatar">
          {currentUser.photoURL ? (
            <img src={currentUser.photoURL} alt="Profile" />
          ) : (
            <div class="avatar-placeholder">{currentUser.displayName?.charAt(0) || 'U'}</div>
          )}
        </div>
        <div class="profile-details">
          <p><strong>Name:</strong> {currentUser.displayName || 'Not provided'}</p>
          <p><strong>Email:</strong> {currentUser.email}</p>
          <p><strong>Account Created:</strong> {currentUser.metadata.creationTime}</p>
        </div>
      </div>
      <button onClick={handleSignOut} disabled={loading} class="sign-out-button">
        Sign Out
      </button>
    </div>
  );
};

export default Profile;
