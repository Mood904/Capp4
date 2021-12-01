import { initializeApp } from "firebase/app";
import {getFirestore} from "@firebase/firestore"; 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBevk6vyRVFAA00JzSuuOhtGUcIbK1o1TQ",
  authDomain: "capstone2-e3c8d.firebaseapp.com",
  projectId: "capstone2-e3c8d",
  storageBucket: "capstone2-e3c8d.appspot.com",
  messagingSenderId: "1035603436981",
  appId: "1:1035603436981:web:fcafabce0d1dc7247525fc"
};

const app = initializeApp(firebaseConfig);
export const db=getFirestore(app);
