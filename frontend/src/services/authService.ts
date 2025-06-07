import { 
  signInWithPopup, 
  signOut as firebaseSignOut,
  GithubAuthProvider,
  TwitterAuthProvider
} from 'firebase/auth';
import { auth, googleProvider } from '../firebase';

export async function signInWithGoogle() {
  try {
    console.log('Starting Google sign-in process...');
    if (!auth || !googleProvider) {
      console.error('Auth or GoogleProvider is not initialized!');
      return { 
        success: false, 
        error: 'Authentication service not initialized properly' 
      };
    }
    
    const result = await signInWithPopup(auth, googleProvider);
    console.log('Google sign-in successful:', result);
    return { success: true, user: result.user };
  } catch (error: any) {
    console.error('Google sign-in error:', error.code, error.message);
    let errorMessage = error.message;
    
    // Provide more user-friendly error messages for common errors
    if (error.code === 'auth/configuration-not-found') {
      errorMessage = 'Authentication configuration not found. Please make sure Firebase is properly configured.';
    } else if (error.code === 'auth/popup-blocked') {
      errorMessage = 'Sign-in popup was blocked by your browser. Please allow popups for this site.';
    } else if (error.code === 'auth/popup-closed-by-user') {
      errorMessage = 'Sign-in was canceled because the popup was closed.';
    }
    
    return { success: false, error: errorMessage };
  }
}

// You can expand with these functions if you want to add more providers later
export async function signInWithGithub() {
  try {
    const githubProvider = new GithubAuthProvider();
    const result = await signInWithPopup(auth, githubProvider);
    return { success: true, user: result.user };
  } catch (error: any) {
    return { success: false, error: error.message };
  }
}

export async function signInWithTwitter() {
  try {
    const twitterProvider = new TwitterAuthProvider();
    const result = await signInWithPopup(auth, twitterProvider);
    return { success: true, user: result.user };
  } catch (error: any) {
    return { success: false, error: error.message };
  }
}

export async function signOut() {
  try {
    console.log('Attempting sign out...');
    if (!auth) {
      console.error('Auth is not initialized!');
      return { 
        success: false, 
        error: 'Authentication service not initialized properly' 
      };
    }
    
    await firebaseSignOut(auth);
    console.log('Sign out successful');
    return { success: true };
  } catch (error: any) {
    console.error('Sign out error:', error);
    return { 
      success: false, 
      error: `Sign out failed: ${error.message}` 
    };
  }
}
