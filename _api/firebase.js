// import * as firebase from 'firebase'
import { initializeApp } from "firebase/app";
import { getAuth , signInWithEmailAndPassword , createUserWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDxmq9431fEGILRSUvbJ2f5kB3n6amez_c",
    authDomain: "project-4d23b.firebaseapp.com",
    projectId: "project-4d23b",
    storageBucket: "project-4d23b.appspot.com",
    messagingSenderId: "998887931406",
    appId: "1:998887931406:web:6906ce99f99dfd38e1065f",
    measurementId: "G-G7EQNGL9E0"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth();


export function signIn(email, password)  {
      return  signInWithEmailAndPassword(auth,email,password)
}
export function signUp(email, password)  {
      return  createUserWithEmailAndPassword(auth,email,password)
}