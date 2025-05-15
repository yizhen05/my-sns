// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA7ikQpiG3jwZyFToLEh8-2JG2-wHrbpTM",
  authDomain: "my-sns-76063.firebaseapp.com",
  projectId: "my-sns-76063",
  storageBucket: "my-sns-76063.firebasestorage.app",
  messagingSenderId: "861495339350",
  appId: "1:861495339350:web:11a4737108a74a38594ef7",
  measurementId: "G-SCMXKB4Z25",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
