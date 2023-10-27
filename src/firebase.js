import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAaeH-1mTtcpfqWScZVTYqULTlgL6-QK6U",
  authDomain: "ensineme-7040e.firebaseapp.com",
  projectId: "ensineme-7040e",
  storageBucket: "ensineme-7040e.appspot.com",
  messagingSenderId: "899110738078",
  appId: "1:899110738078:web:837a5bf3b468d2183c038f"
};




// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
