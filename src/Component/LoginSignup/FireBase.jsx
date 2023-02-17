// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyB-yHZFuskr_RLybyLuJMvb-NKiVOJGmdA",
  authDomain: "snap-deal-clone.firebaseapp.com",
  projectId: "snap-deal-clone",
  storageBucket: "snap-deal-clone.appspot.com",
  messagingSenderId: "310126243739",
  appId: "1:310126243739:web:a32084b17ccbf8e930bb3e",
  measurementId: "G-L4QD697QK7"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth();

export {app , auth}