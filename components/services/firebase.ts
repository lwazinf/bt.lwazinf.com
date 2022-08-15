// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDVNCyQ19yNq4Kjkw4BzSSXrLWz3Couykw",
  authDomain: "birdtool.firebaseapp.com",
  projectId: "birdtool",
  storageBucket: "birdtool.appspot.com",
  messagingSenderId: "1093385452009",
  appId: "1:1093385452009:web:c136a577dd842efce3b378",
  measurementId: "G-5QSMWFJXC4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const db = getFirestore(app);

export { db }