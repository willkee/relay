import { initializeApp } from "firebase/app";
import {
	getAuth,
	signInWithEmailAndPassword,
	sendPasswordResetEmail,
	onAuthStateChanged,
	signOut,
} from "firebase/auth";
import "firebase/auth";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import "firebase/firestore";

// firebaseConfig is being git-ignored for security reasons.
import firebaseConfig from "./firebaseConfig";

initializeApp(firebaseConfig);

const firebaseAuth = getAuth();
const db = getFirestore();

export {
	firebaseAuth,
	onAuthStateChanged,
	signInWithEmailAndPassword,
	sendPasswordResetEmail,
	signOut,
	doc,
	getDoc,
	db,
};
