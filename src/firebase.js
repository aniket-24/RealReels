// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";

import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/storage";
import "firebase/compat/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB704Tc7hpwxmC9ofArV3S2GQLvEPLKywQ",
  authDomain: "reels-7f04a.firebaseapp.com",
  projectId: "reels-7f04a",
  storageBucket: "reels-7f04a.appspot.com",
  messagingSenderId: "485873615678",
  appId: "1:485873615678:web:1ec1435c6a50afd4ca226f",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();

const firestore = firebase.firestore();

export const database = {
  users: firestore.collection("users"),
  posts: firestore.collection("posts"),
  getTimeStamp: firebase.firestore.FieldValue.serverTimestamp,
};

export const storage = firebase.storage();
