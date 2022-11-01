// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "@firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAU6CG5wmbhJcGiEPv9J9KE8GhcedL1Jso",
  authDomain: "csse-crud.firebaseapp.com",
  projectId: "csse-crud",
  storageBucket: "csse-crud.appspot.com",
  messagingSenderId: "496074991940",
  appId: "1:496074991940:web:da1b93489d08cd97958f11",
  measurementId: "G-71R3M0NPVK",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

export const db = getFirestore(app);
