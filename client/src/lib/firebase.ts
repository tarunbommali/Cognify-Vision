import { initializeApp, type FirebaseError } from "firebase/app";
import { getAuth } from "firebase/auth";
import {
  initializeFirestore,
  persistentLocalCache,
  memoryLocalCache,
} from "firebase/firestore";
import { getStorage } from "firebase/storage";

const apiKey = import.meta.env.VITE_FIREBASE_API_KEY;
const projectId = import.meta.env.VITE_FIREBASE_PROJECT_ID;
const authDomain = import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || `${projectId}.firebaseapp.com`;
const storageBucket = import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || `${projectId}.firebasestorage.app`;
const appId = import.meta.env.VITE_FIREBASE_APP_ID;

if (!apiKey) {
  // Fail fast with a clear developer-facing message when env vars are missing
  console.error('Missing VITE_FIREBASE_API_KEY. Ensure you have a .env(.local) file with the VITE_FIREBASE_* variables.');
  throw new Error('VITE_FIREBASE_API_KEY is not defined');
}

const firebaseConfig = {
  apiKey,
  authDomain,
  projectId,
  storageBucket,
  appId,
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

const firestoreCache = (() => {
  try {
    return persistentLocalCache();
  } catch (error) {
    const firebaseError = error as FirebaseError | undefined;

    if (firebaseError?.code === 'failed-precondition') {
      console.warn('Multiple tabs open, persistence disabled');
    } else if (firebaseError?.code === 'unimplemented') {
      console.warn("Browser doesn't support persistence");
    } else {
      console.warn(
        'Persistent Firestore cache unavailable; falling back to in-memory cache.',
        error,
      );
    }

    return memoryLocalCache();
  }
})();

export const db = initializeFirestore(app, {
  localCache: firestoreCache,
});

export const storage = getStorage(app);

export default app;
