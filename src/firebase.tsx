import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const {
  REACT_APP_APPID,
  REACT_APP_MEASUREMENT_ID,
  REACT_APP_MESSAGINSENDERID,
  REACT_APP_STORAGEBUCKET,
  REACT_APP_PROJECTID,
  REACT_APP_AUTHDOMAIN,
  REACT_APP_FIREBASE_API_KEY
} = process.env;

const app = firebase.initializeApp({
  apiKey: REACT_APP_FIREBASE_API_KEY,
  authDomain: REACT_APP_AUTHDOMAIN,
  projectId: REACT_APP_PROJECTID,
  storageBucket: REACT_APP_STORAGEBUCKET,
  messagingSenderId: REACT_APP_MESSAGINSENDERID,
  appId: REACT_APP_APPID,
  measurementId: REACT_APP_MEASUREMENT_ID
});

export const auth = app.auth();
export default app;
