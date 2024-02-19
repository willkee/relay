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

const firebaseConfig = {
	apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
	authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
	projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
	storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
	messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
	appId: import.meta.env.VITE_FIREBASE_APP_ID,
	measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
};

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
