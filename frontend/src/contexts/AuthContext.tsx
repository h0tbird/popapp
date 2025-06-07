import { createContext } from 'preact';
import { useContext, useEffect, useState } from 'preact/hooks';
import { User, onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase';

interface AuthContextType {
  currentUser: User | null;
  loading: boolean;
}

const AuthContext = createContext<AuthContextType>({ currentUser: null, loading: true });

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }: { children: any }) {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log('Setting up auth state listener');
    let unsubscribe: () => void = () => {};
    
    // Check if auth is properly initialized (which depends on environment variables)
    if (!auth) {
      console.error('Auth is not initialized. Check your environment variables.');
      setLoading(false);
      return unsubscribe;
    }
    
    try {
      unsubscribe = onAuthStateChanged(auth, (user) => {
        console.log('Auth state changed:', user ? `User: ${user.uid}` : 'No user');
        setCurrentUser(user);
        setLoading(false);
      }, (error) => {
        console.error('Auth state change error:', error);
        setLoading(false);
      });
    } catch (error) {
      console.error('Error setting up auth listener:', error);
      setLoading(false);
    }

    return () => {
      if (unsubscribe) unsubscribe();
    };
  }, []);

  const value = {
    currentUser,
    loading
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
