import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth"
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASURMENT_ID,
};
console.log("firbaseConfig: ", firebaseConfig)
const app = initializeApp(firebaseConfig);
export default app;

const db = getFirestore();
const auth = getAuth(app);
const GoogleProvider = new GoogleAuthProvider();


export { db, auth, GoogleProvider };

// Import the functions you need from the SDKs you need