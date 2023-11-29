import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyBxYZSoRGmfLhBhW6y7LiaUrUQjhqV07co",
  authDomain: "ensineme-4aa3f.firebaseapp.com",
  projectId: "ensineme-4aa3f",
  storageBucket: "ensineme-4aa3f.appspot.com",
  messagingSenderId: "68703253337",
  appId: "1:68703253337:web:58fda22fc0dbd102c29248"
};



// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
