// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from 'firebase/database';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBL_BvSVsZO6krMQSEm1G7d9BOvMrn3pM8",
  authDomain: "esp-firebase-app.firebaseapp.com",
  databaseURL: "https://esp-firebase-app-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "esp-firebase-app",
  storageBucket: "esp-firebase-app.appspot.com",
  messagingSenderId: "673699208056",
  appId: "1:673699208056:web:d60213aa1944e8166f868d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);