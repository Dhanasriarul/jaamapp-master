import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {getAuth,GoogleAuthProvider} from "firebase/auth"
const firebaseConfig = {
  apiKey: "AIzaSyBm_SUSiofNIqqAtKL977OgOg06Q9PWPAI",
  authDomain: "subscription-stripe-api.firebaseapp.com",
  projectId: "subscription-stripe-api",
  storageBucket: "subscription-stripe-api.appspot.com",
  messagingSenderId: "69809435373",
  appId: "1:69809435373:web:766032eb2896f8da6112e4",
  measurementId: "G-ZBPVEMTSE8"
};
const app = initializeApp(firebaseConfig);
export default app;

const db=getFirestore();
const auth=getAuth(app);
const GoogleProvider=new GoogleAuthProvider();


export{db,auth,GoogleProvider};

// Import the functions you need from the SDKs you need