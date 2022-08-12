// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBz-QwYEku8NbXVc3MVg9iyQ5tpGGkYvXQ",
  authDomain: "geniuscarservice-c4951.firebaseapp.com",
  projectId: "geniuscarservice-c4951",
  storageBucket: "geniuscarservice-c4951.appspot.com",
  messagingSenderId: "692000917087",
  appId: "1:692000917087:web:4608f38dd3cb92ad97fdea",
  measurementId: "G-KR996D9MVG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
export default auth;