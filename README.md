# popapp
Coding apps with a "vibe".

## Frontend
npm, Preact, TypeScript

### How it was scaffolded
```console
$ npm init preact frontend
$ cd frontend
$ npm install firebase
$ npm install preact-router
```

### Firebase Authentication Setup

To set up Google Authentication:

1. Create a Firebase project at [Firebase Console](https://console.firebase.google.com/)
2. Register your app in the Firebase project
3. Enable Google Authentication in the Firebase Authentication section
4. Get your Firebase configuration from the Firebase console
5. Update the configuration in `frontend/src/firebase.ts` with your Firebase project details:

```typescript
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID",
  measurementId: "YOUR_MEASUREMENT_ID"
};
```

### Development

```console
$ cd frontend
$ npm run dev
```

This will start the development server and make the app available at http://localhost:3000.

## Backend
golang

## Infrastructure
k8s