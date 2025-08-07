// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA_kNYKFsRCQCsRDPYaYfOTUOY0J0e4QHI",
  authDomain: "daily-habit-tracker-afd10.firebaseapp.com",
  projectId: "daily-habit-tracker-afd10",
  storageBucket: "daily-habit-tracker-afd10.firebasestorage.app",
  messagingSenderId: "685351348237",
  appId: "1:685351348237:web:9704077e7c83fbc3468d44",
  measurementId: "G-X02S35QD1S"
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
export const db = getFirestore(app)