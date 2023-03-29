// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBYEyJgHzRD3eXUuCdWgmdYmazhEotYGBc",
  authDomain: "music-travel-d18dd.firebaseapp.com",
  projectId: "music-travel-d18dd",
  storageBucket: "music-travel-d18dd.appspot.com",
  messagingSenderId: "1074082597580",
  appId: "1:1074082597580:web:8682adf05d1956aca8d069",
  measurementId: "G-5XZWH6S7SD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app); //to use this everywhere in our app
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);