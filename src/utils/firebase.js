// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBCGCRWAi8Lo173G2Tj8WMSOc6RUSaN1So",
  authDomain: "patientgloves-773ac.firebaseapp.com",
  databaseURL: "https://patientgloves-773ac-default-rtdb.firebaseio.com",
  projectId: "patientgloves-773ac",
  storageBucket: "patientgloves-773ac.appspot.com",
  messagingSenderId: "279973795791",
  appId: "1:279973795791:web:e345782207a6368700e4ba",
  measurementId: "G-7ZZ0EGKWTY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);