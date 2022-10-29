import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: "AIzaSyDP8jM6OdMwRe7ja_YKVln8Hh5Q9QfrejQ",
  authDomain: "online-shopping-6b858.firebaseapp.com",
  projectId: "online-shopping-6b858",
  storageBucket: "online-shopping-6b858.appspot.com",
  messagingSenderId: "10017897984",
  appId: "1:10017897984:web:5b1759bcf1e6a1806422e5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;
