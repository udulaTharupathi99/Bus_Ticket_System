// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "@firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDv0StraXfEKy07k594agITvEuQzMI0JSA",
  authDomain: "csse-bus-ticket-system.firebaseapp.com",
  projectId: "csse-bus-ticket-system",
  storageBucket: "csse-bus-ticket-system.appspot.com",
  messagingSenderId: "444948356964",
  appId: "1:444948356964:web:de18a5e59320ea713fe471",
  measurementId: "G-CB7ED908CG",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

export const db = getFirestore(app);
