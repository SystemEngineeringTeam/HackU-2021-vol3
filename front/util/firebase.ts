import type { FirebaseApp } from "firebase/app";
import { getApps, initializeApp } from "firebase/app";
import type { Auth as FirebaseAuth } from "firebase/auth";

import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGE_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_SENDER_ID,
};

export const getFirebaseApp = (): FirebaseApp | undefined => {
  if (typeof window === "undefined") return; // バックエンドで実行されないようにする

  return getApps()[0] || initializeApp(firebaseConfig);
};
/**
 * @description FirebaseAuthを返す
 */
export const getFirebaseAuth = (): FirebaseAuth => {
  return getAuth(getFirebaseApp());
};
