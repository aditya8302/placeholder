// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBRJQOUO-12372u1CKwyhz2dmlsIjrA-jw",
  authDomain: "placeholder-c6266.firebaseapp.com",
  projectId: "placeholder-c6266",
  storageBucket: "placeholder-c6266.appspot.com",
  messagingSenderId: "795690723720",
  appId: "1:795690723720:web:d630cbee1908c182a7b23d",
  measurementId: "G-YBMCZZ3SNJ"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
export {auth,db,app};
