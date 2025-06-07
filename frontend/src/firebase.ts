import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getAnalytics } from 'firebase/analytics';

// Firebase configuration using environment variables
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID
};

// Validate required environment variables
const validateEnvVariables = () => {
  const requiredVars = [
    'VITE_FIREBASE_API_KEY', 
    'VITE_FIREBASE_AUTH_DOMAIN',
    'VITE_FIREBASE_PROJECT_ID',
    'VITE_FIREBASE_STORAGE_BUCKET'
  ];
  
  const missingVars = requiredVars.filter(
    varName => !import.meta.env[varName]
  );
  
  if (missingVars.length > 0) {
    console.error(`Missing required environment variables: ${missingVars.join(', ')}`);
    return false;
  }
  return true;
};

// Initialize Firebase
let app;
let auth;
let analytics = null;
let googleProvider;

if (validateEnvVariables()) {
  try {
    app = initializeApp(firebaseConfig);
    auth = getAuth(app);
    console.log('Firebase Auth initialized successfully');
    
    try {
      analytics = getAnalytics(app);
      console.log('Firebase Analytics initialized successfully');
    } catch (error) {
      console.error('Analytics initialization failed:', error);
    }
    
    googleProvider = new GoogleAuthProvider();
    // Add custom parameters for Google Sign-In (optional)
    googleProvider.setCustomParameters({
      prompt: 'select_account'
    });
    
  } catch (error) {
    console.error('Firebase initialization error:', error);
  }
} else {
  console.error('Firebase initialization skipped due to missing environment variables');
}

export { auth, googleProvider, analytics };
