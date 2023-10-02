import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAFnbWuD9E26nxmPCnDUMQBLft_7cmqhcg",
  authDomain: "ensineme-8ae1c.firebaseapp.com",
  projectId: "ensineme-8ae1c",
  storageBucket: "ensineme-8ae1c.appspot.com",
  messagingSenderId: "674773044064",
  appId: "1:674773044064:web:e4d51a2b58909798f6ac05",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
