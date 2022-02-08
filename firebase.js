// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB6F3lakSRBlD3dadrPSgt6hZnjefUaESs",
  authDomain: "instagram-v1-build.firebaseapp.com",
  projectId: "instagram-v1-build",
  storageBucket: "instagram-v1-build.appspot.com",
  messagingSenderId: "1011741213379",
  appId: "1:1011741213379:web:10d0a9d5cb41b9ee9c1876",
  measurementId: "G-S8YTE2S3T9",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };
