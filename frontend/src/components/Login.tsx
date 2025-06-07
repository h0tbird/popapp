import { FunctionComponent } from 'preact';
import { useState } from 'preact/hooks';
import { signInWithGoogle } from '../services/authService';
import { useAuth } from '../contexts/AuthContext';

const Login: FunctionComponent = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const { currentUser } = useAuth();

  const handleGoogleSignIn = async () => {
    try {
      setError('');
      setLoading(true);
      const result = await signInWithGoogle();
      if (!result.success) {
        setError(result.error || 'Failed to sign in with Google');
      }
    } catch (error) {
      setError('Failed to sign in with Google');
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div class="login-container">
      <h2>Welcome to PopApp</h2>
      {error && <div class="error">{error}</div>}
      {currentUser ? (
        <p>You are already signed in as {currentUser.displayName || currentUser.email}</p>
      ) : (
        <button 
          onClick={handleGoogleSignIn} 
          disabled={loading}
          class="google-signin-button"
        >
          <span class="google-icon">G</span>
          <span>Sign in with Google</span>
        </button>
      )}
    </div>
  );
};

export default Login;
