import { initializeApp } from "firebase/app";
import {
	getAuth,
	signInWithEmailAndPassword,
	onAuthStateChanged,
	signOut,
} from "firebase/auth";
import "firebase/auth";
import "firebase/firestore";

// firebaseConfig is being git-ignored for security reasons.
import firebaseConfig from "./firebaseConfig";

initializeApp(firebaseConfig);

const firebaseAuth = getAuth();

export {
	firebaseAuth,
	onAuthStateChanged,
	signInWithEmailAndPassword,
	signOut,
};
