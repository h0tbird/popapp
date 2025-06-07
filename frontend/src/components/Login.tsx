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
      console.log('Attempting Google sign-in...');
      const result = await signInWithGoogle();
      console.log('Sign-in result:', result);
      
      if (!result.success) {
        console.error('Sign-in failed:', result.error);
        setError(result.error || 'Failed to sign in with Google');
      } else {
        console.log('Sign-in successful:', result.user);
        // Redirect to dashboard after successful login
        if (typeof window !== 'undefined') {
          window.location.href = '/dashboard';
        }
      }
    } catch (error) {
      console.error('Sign-in error:', error);
      setError('Failed to sign in with Google');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div class="login-container">
      <h2>Welcome to PopApp</h2>
      <p>Please sign in to continue to your account</p>
      {error && <div class="error-message">{error}</div>}
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
