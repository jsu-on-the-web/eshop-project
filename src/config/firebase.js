/* eslint-disable no-unused-vars */

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app.js";
import { getFirestore, Timestamp, FieldValue, Filter } from 'firebase-admin/firestore.js';
import "firebase/firestore/dist/index.node.cjs.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDSoQKVr9D6v_5UqogA3aBb_ZqjbWYXGXk",
    authDomain: "e-shop-3d076.firebaseapp.com",
    projectId: "e-shop-3d076",
    storageBucket: "e-shop-3d076.appspot.com",
    messagingSenderId: "523636124713",
    appId: "1:523636124713:web:3ab99439da1d0e7019c038"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();