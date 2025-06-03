// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCftkh25tJGPVLiwjNVfF5ANGuG2SyybnY",
  authDomain: "my-sns-342b5.firebaseapp.com",
  projectId: "my-sns-342b5",
  storageBucket: "my-sns-342b5.firebasestorage.app",
  messagingSenderId: "204067574023",
  appId: "1:204067574023:web:00b63b9eeaf2d89e64b5a2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
