// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";



// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = { 
  apiKey: "AIzaSyCnVGkX2RvdiGe2sWsG57L3_Q459YL-vt8",
  authDomain: "hi-chat-93805.firebaseapp.com",
  projectId: "hi-chat-93805",
  storageBucket: "hi-chat-93805.appspot.com",
  messagingSenderId: "1076733708190",
  appId: "1:1076733708190:web:87cabc9465bf3674cdb88f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// firebase auth referansını al
export const auth = getAuth(app);

// google sağlayıcısını kur
export const provider = new GoogleAuthProvider();

// firestore veritabanı referansını al
export const db = getFirestore(app);