import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDg5uOWwUTh-B32ekEhZ1Lro5nPfWTHiUk",
  authDomain: "teste-afb98.firebaseapp.com",
  projectId: "teste-afb98",
  storageBucket: "teste-afb98.appspot.com",
  messagingSenderId: "428600799233",
  appId: "1:428600799233:web:da18706a493022ebf81000",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
