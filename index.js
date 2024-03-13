// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAcoJ2tADeEhviSSA_l0WVPo_tkI3Cp28U",
  authDomain: "ecommerce-on-firebase.firebaseapp.com",
  projectId: "ecommerce-on-firebase",
  storageBucket: "ecommerce-on-firebase.appspot.com",
  messagingSenderId: "735748734466",
  appId: "1:735748734466:web:1d7f00a488614a8970b11b",
  measurementId: "G-J5249WLDJC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);