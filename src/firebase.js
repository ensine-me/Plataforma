import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyBvPgoNE7OPe4vHM95zHb3RMHnpe-Ijqik",
  authDomain: "ensine-me-b69aa.firebaseapp.com",
  projectId: "ensine-me-b69aa",
  storageBucket: "ensine-me-b69aa.appspot.com",
  messagingSenderId: "1057546133611",
  appId: "1:1057546133611:web:094ad081ea00b7585a512e"
};



// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
