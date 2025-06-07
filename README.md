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
5. Copy the `.env.example` file to `.env` in the frontend directory
6. Update the `.env` file with your Firebase project details:

```
# Firebase Configuration
VITE_FIREBASE_API_KEY=your_api_key_here
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain_here
VITE_FIREBASE_PROJECT_ID=your_project_id_here
VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket_here
VITE_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id_here
VITE_FIREBASE_APP_ID=your_app_id_here
VITE_FIREBASE_MEASUREMENT_ID=your_measurement_id_here
```

**Important**: Never commit your `.env` file to version control. It contains sensitive information that should be kept private.

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