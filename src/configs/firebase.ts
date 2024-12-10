// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBWcF5Tf6_0qgBI73nIw0h74dAF1Gyf30A",
  authDomain: "e-comm-44af6.firebaseapp.com",
  projectId: "e-comm-44af6",
  storageBucket: "e-comm-44af6.firebasestorage.app",
  messagingSenderId: "617700331021",
  appId: "1:617700331021:web:2051f0fa701098add04f44",
  measurementId: "G-6LL03THB53",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
