import { db } from '../../config/firebase';
import {
    collection,
    getDocs,
    addDoc,
    onSnapshot,
    doc,
    getDoc,
    deleteDoc,
    updateDoc,
    increment,
} from 'firebase/firestore';
import firebase from 'firebase/app';

/** Initialize Firebase */
firebase.initializeApp(db);
const firestore = firebase.firestore();

const addDocumentToFirestore = function (newDocData) {
    
}

